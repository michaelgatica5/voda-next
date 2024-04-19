"use client"
import React, { useState } from "react";
import PopUpNew from "@/components/popUpNew";
import TableButtons from "@/components/buttons";
import ActionsButtons from "@/components/actionsButtons";
import TableTabs from "@/components/tabs";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Input,
	Button,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	Chip,
	User,
	Pagination,
	Popover
} from "@nextui-org/react";
// import { PlusIcon } from "./PlusIcon";
// import { VerticalDotsIcon } from "./VerticalDotsIcon";
// import { SearchIcon } from "./SearchIcon";
// import { ChevronDownIcon } from "./ChevronDownIcon";
import { columns, users, statusOptions } from "./data";
// import { capitalize } from "./utils";
// import styles from './Providers.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil, faEye } from "@fortawesome/free-solid-svg-icons";

const statusColorMap = {
	active: "success",
	paused: "danger",
	vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

export default function ArticlePage() {
	const [filterValue, setFilterValue] = React.useState("");
	const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
	const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
	const [statusFilter, setStatusFilter] = React.useState("all");
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [sortDescriptor, setSortDescriptor] = React.useState({
		column: "age",
		direction: "ascending",
	});
	const [page, setPage] = React.useState(1);

	const hasSearchFilter = Boolean(filterValue);

	const headerColumns = React.useMemo(() => {
		if (visibleColumns === "all") return columns;

		return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
	}, [visibleColumns]);

	const filteredItems = React.useMemo(() => {
		let filteredUsers = [...users];

		if (hasSearchFilter) {
			filteredUsers = filteredUsers.filter((user) =>
				user.name.toLowerCase().includes(filterValue.toLowerCase()),
			);
		}
		if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
			filteredUsers = filteredUsers.filter((user) =>
				Array.from(statusFilter).includes(user.status),
			);
		}

		return filteredUsers;
	}, [users, filterValue, statusFilter]);

	const pages = Math.ceil(filteredItems.length / rowsPerPage);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return filteredItems.slice(start, end);
	}, [page, filteredItems, rowsPerPage]);

	const sortedItems = React.useMemo(() => {
		return [...items].sort((a, b) => {
			const first = a[sortDescriptor.column];
			const second = b[sortDescriptor.column];
			const cmp = first < second ? -1 : first > second ? 1 : 0;

			return sortDescriptor.direction === "descending" ? -cmp : cmp;
		});
	}, [sortDescriptor, items]);

	const renderCell = React.useCallback((user, columnKey) => {
		const cellValue = user[columnKey];

		switch (columnKey) {
			case "name":
				return (
					<User
						avatarProps={{ radius: "lg", src: user.avatar }}
						description={user.email}
						name={cellValue}
					>
						{user.email}
					</User>
				);
			case "status":
				return (
					<Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
						{cellValue}
					</Chip>
				);
			case "actions":
				return (
					<div className="relative flex justify-center items-center gap-1">
						<TableButtons deleteButtonRow={true} editButtonRow={true} viewButtonRow={true} />
						{/* <TableButtons seeButton={"editButtonRow"} />
						<TableButtons seeButton={"deleteButtonRow"} /> */}
					</div>
					// <ActionsButtons />
					// <div className="relative flex justify-center items-center gap-1">
					// 	{/* <Dropdown>
					// 		<DropdownTrigger>
					// 			<Button isIconOnly size="sm" variant="light">
					// 				<VerticalDotsIcon className="text-default-300" />
					// 			</Button>
					// 		</DropdownTrigger>
					// 		<DropdownMenu>
					// 			<DropdownItem>View</DropdownItem>
					// 			<DropdownItem>Edit</DropdownItem>
					// 			<DropdownItem>Delete</DropdownItem>
					// 		</DropdownMenu>
					// 	</Dropdown> */}
					// 	<Button 
					// 		color="warning" 
					// 		size="sm" 
					// 		aria-label="view"
					// 		className="bg-white rounded border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
					// 		isIconOnly 
					// 		variant="faded" 
					// 	>
					// 		<FontAwesomeIcon size="md" icon={faEye} />
					// 	</Button>
					// 	<Button 
					// 		color="warning" 
					// 		size="sm" 
					// 		aria-label="edit"
					// 		className="bg-white rounded border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
					// 		isIconOnly 
					// 		variant="faded" 
					// 	>
					// 		<FontAwesomeIcon size="md" icon={faPencil} />
					// 	</Button>
					// 	<Button 
					// 		color="warning" 
					// 		size="sm" 
					// 		aria-label="Delete"
					// 		className="bg-white rounded border border-tabs-red text-tabs-red hover:bg-tabs-red hover:text-white"
					// 		isIconOnly 
					// 		variant="faded" 
					// 	>
					// 		<FontAwesomeIcon size="md" icon={faTrashCan} />
					// 	</Button>
						
					// </div>
				);
			default:
				return cellValue;
		}
	}, []);

	const onNextPage = React.useCallback(() => {
		if (page < pages) {
			setPage(page + 1);
		}
	}, [page, pages]);

	const onPreviousPage = React.useCallback(() => {
		if (page > 1) {
			setPage(page - 1);
		}
	}, [page]);

	const onRowsPerPageChange = React.useCallback((e) => {
		setRowsPerPage(Number(e.target.value));
		setPage(1);
	}, []);

	const onSearchChange = React.useCallback((value) => {
		if (value) {
			setFilterValue(value);
			setPage(1);
		} else {
			setFilterValue("");
		}
	}, []);

	const onClear = React.useCallback(() => {
		setFilterValue("")
		setPage(1)
	}, [])

	const backdrops = ["opaque", "blur", "transparent"];

	const [showModal, setShowModal] = useState(false);
	
	const topContent = React.useMemo(() => {
		return (
			<div>
				<div>
					<TableTabs />
				</div>
				
			
			<div className="flex justify-between">
				<div className="flex gap-1.5">
					<div className="flex gap-4 items-center">	
						{/* <Button 
							color="primary" 
							variant="ghost"
							className="h-7 font-bold text-xs font-normal py-2 px-2 rounded border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
						>
							Agregar Nuevo
						</Button>   */}
						<PopUpNew showModal={showModal} setShowModal={setShowModal}/>

						
					</div>
					<div className="flex gap-4 items-center">
						<TableButtons buttonCreateNew={true} buttonCreateNewText={"Agregar nuevo"} deleteButtonHead={true} setShowModal={setShowModal}/>
						{/* <DeleteButton /> */}
						{/* <TableButtons seeButton={"deleteButtonHead"} /> */}
						{/* <Button 
							color="warning" 
							size="sm" 
							aria-label="Delete"
							className="h-7 bg-white rounded border border-tabs-red text-tabs-red hover:bg-tabs-red hover:text-white"
							isIconOnly 
							variant="faded" 
						>
							<FontAwesomeIcon size="md" icon={faTrashCan} />
						</Button> */}
					</div>
					<div className="flex justify-between items-center">
						<label className="flex items-center text-black text-small ">
							
							<select
								className="h-7 mr-3 bg-transparent outline-none text-default-400 text-small border border-gray-300 rounded-md px-1.5 py-1 w-16"
								onChange={onRowsPerPageChange}
							>
								<option className="py-10" value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
							</select>
							items/página
						</label>
					</div>
				</div>
				<div className="flex justify-between gap-3 items-end">
					<Input
						isClearable
						className="w-full sm:max-w-[100%]"
						placeholder="Buscar"
						// startContent={<SearchIcon />}
						value={filterValue}
						onClear={() => onClear()}
						onValueChange={onSearchChange}
						classNames={{
							base: "h-auto",
							mainWrapper: "h-max border border-gray-300",
							input: "text-small bg-white p-3",
							inputWrapper: "p-0 h-6 bg-white font-normal text-default-500", //bg-default-400/20 dark:bg-default-500/20
						  }}
						  size="sm"
						//   startContent={<SearchIcon size={18} />}
						  type="search"
					/>
				</div>
					{/* <div className="flex gap-3">
						<Dropdown>
							<DropdownTrigger className="hidden sm:flex">
								<Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
									Status
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label="Table Columns"
								closeOnSelect={false}
								selectedKeys={statusFilter}
								selectionMode="multiple"
								onSelectionChange={setStatusFilter}
							>
								{statusOptions.map((status) => (
									<DropdownItem key={status.uid} className="capitalize">
										{capitalize(status.name)}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
						<Dropdown>
							<DropdownTrigger className="hidden sm:flex">
								<Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
									Columns
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label="Table Columns"
								closeOnSelect={false}
								selectedKeys={visibleColumns}
								selectionMode="multiple"
								onSelectionChange={setVisibleColumns}
							>
								{columns.map((column) => (
									<DropdownItem key={column.uid} className="capitalize">
										{capitalize(column.name)}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
						<Button color="primary" endContent={<PlusIcon />}>
							Add New
						</Button>
					</div> */}
				
				
			</div>
			</div>
		);
	}, [
		filterValue,
		statusFilter,
		visibleColumns,
		onRowsPerPageChange,
		users.length,
		onSearchChange,
		hasSearchFilter,
		showModal,
	]);

	const bottomContent = React.useMemo(() => {
		return (
			<div className="py-2 px-2 flex justify-between items-center">
				<span className="text-default-400 text-small">Mostrando {page} - {pages} de {users.length} entradas</span>
				<div className="hidden sm:flex w-[30%] justify-end gap-0.5 h-9">
					<Button 
					className="rounded-lg h-auto text-black text-sm"
					isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
						Anterior
					</Button>
					<Pagination
						isCompact
						// showControls
						showShadow
						color="primary-blue"
						page={page}
						
						total={pages}
						onChange={setPage}
						classNames={{
							
							base: "",
							wrapper: "h-full",
							prev: "",
							next: "",
							item: "",
							cursor: "bg-primary-blue", //rounded-r-none
							forwardIcon: "",
							ellipsis: "",
							chevronNext: "",

						}}
					/>
					<Button
					 className="rounded-lg h-auto text-black text-sm"
					 isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
						Siguiente
					</Button>
				</div>
			</div>
		);
	}, [selectedKeys, items.length, page, pages, hasSearchFilter]);

	return (
		<Table
			
			aria-label="Example table with custom cells, pagination and sorting"
			isHeaderSticky
			bottomContent={bottomContent}
			bottomContentPlacement="outside"
			
			// classNames={{
			// 	wrapper: "max-h-[382px] bg-red-800",
			// }}
			checkboxesProps={{
				radius: "none"
			}}
			
			classNames={{
				base: "m-5 w-auto",
				wrapper: "shadow-none border rounded-lg p-0",
				table: "", //no lo toma rounded-none
				thead: "", //no lo toma
				tbody: "select:none",
				tr: "",
				th: "bg-tabs-blue text-white",
				td: "",
				tfoot: "",
				sortIcon: "",
				emptyWrapper: "",
				loadingWrapper: "",
				
				
			}}

			selectedKeys={selectedKeys}
			selectionMode="multiple"
			sortDescriptor={sortDescriptor}
			topContent={topContent}
			topContentPlacement="outside"
			onSelectionChange={setSelectedKeys}
			onSortChange={setSortDescriptor}
			
		>
			<TableHeader
				// css={{backGround:'bg-red-800'}}
				columns={headerColumns}>
				
				{(column) => (
					<TableColumn
						key={column.uid}
						align={column.uid === "actions" ? "center" : "start"}
						allowsSorting={column.sortable}
						
					>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody emptyContent={"No users found"} items={sortedItems}>
				{(item) => (
					<TableRow key={item.id}>
						{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
