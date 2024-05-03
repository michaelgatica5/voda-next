import React, {useState, useEffect} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import axios from "axios";
// import {MailIcon} from './MailIcon.jsx';
// import {LockIcon} from './LockIcon.jsx';
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {animals} from "./data";
import TableButtons from "@/components/buttons";
import { create } from "domain";
import { toast } from 'react-hot-toast';



export default function App({ data, showModal, setShowModal, typeModal, dataArray, obtenerProviders }) {

  const [newData, setNewData] = useState({
    ...dataArray,
  })

  const [editData, setEditData] = useState({
    ...data,
  })

  console.log("edit data",editData)

  const createNew = async () => {
    try {
      await axios.post("http://localhost:1337/api/providers", {
        data: newData
      })
      setTimeout(() => {  
          obtenerProviders()
          setShowModal(false)
      }, 2000);
      toast.success('Creado con éxito', {
        duration: 5000,
        position: 'top-right'
      });
    } catch (error) {
      console.log(error);
    }
  };
  

  const deleteItem = async (data) => {
    console.log("Entra en delete popup", data)
    try {
      await axios.delete(`http://localhost:1337/api/providers/${data.id}`);
      console.log("Elemento eliminado exitosamente");
      obtenerProviders()
      setShowModal(false)
      toast.success('Eliminado con éxito', {
        duration: 5000,
        position: 'top-right'
      });
      // Lógica adicional después de eliminar el proveedor, si es necesario
    } catch (error) {
      console.error("Error al eliminar:", error);
      // toast.error('This is an error!');
    }
  };

  const editOne = async (data) => {
    console.log("entra en guardar edit")
    try {
      await axios.put(`http://localhost:1337/api/providers/${data.id}`, {
        data: editData,
      })
      console.log("Elemento editado exitosamente");
      obtenerProviders()
      setShowModal(false)
      toast.success('Editado con éxito', {
        duration: 5000,
        position: 'top-right'
      });
      // Lógica adicional después de eliminar el proveedor, si es necesario
    }catch (error) {
      console.error("Error al editar:", error);
    }
  }

  console.log("newData", newData)
  // const {isOpen, onOpen, onOpenChange} = useDisclosure(true);
  // const variants = ["flat", "bordered", "underlined", "faded"];

  // console.log("isOpen",isOpen)


  return (
    <>
      {/* {showButton == "newArticleButton" &&
        <Button 
          className="h-7 bg-white rounded border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
          onPress={onOpen} color="primary"
        >Agregar nuevo
        </Button>
      } */}
      {/* {showButton == "newProviderButton" &&
        <Button 
          className="h-7 bg-white rounded border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
          onPress={onOpen} color="primary"
          >Nuevo proveedor
        </Button>
      } */}

        <Modal 
          isOpen={showModal}
          hideCloseButton={true}
          // onOpenChange={onOpenChange}
          // defaultOpen={true}
          placement="top-center"
          className=""
          classNames={{
            wrapper:"",
            base:"max-w-screen-md",
            // body:"bg-red-800 w-1/2",
          }}
        >
          {
            typeModal === "create" &&
            <ModalContent>
              {
                <>
                  <ModalHeader className="flex flex-col gap-1 bg-tabs-blue text-white text-sm">AGREGAR NUEVO PROVEEDOR</ModalHeader>
                  <ModalBody className="flex flex-row flex-wrap gap-0">
                    <Input
                      isRequired
                      autoFocus
                      variant="bordered"
                      labelPlacement="outside"
                      label="Nombre:"
                      placeholder="Ingrese Nombre"
                      className="w-1/2 px-2 py-2"
                      onChange={(e) => { setNewData({ ...newData, nombre: e.target.value }) }}
                    />
                    <Input
                      isRequired
                      variant="bordered"
                      labelPlacement="outside"
                      type="number"
                      label="CUIL:"
                      placeholder="Ingrese CUIL"
                      className="w-1/2 px-2 py-2"
                      onChange={(e) => { setNewData({ ...newData, cuil: e.target.value }) }}
                    />
                    {/* <Autocomplete 
                      isRequired
                      allowsCustomValue
                      label="Rubro" 
                      labelPlacement="outside"
                      variant="bordered"
                      className="w-2/5" 
                      defaultItems={animals}
                      
                    >
                      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete>
                    <Autocomplete 
                      allowsCustomValue
                      label="Search an animal" 
                      variant="bordered"
                      className="w-2/5" 
                      defaultItems={animals}
                    >
                      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                    </Autocomplete> */}
                    <Input
                      variant="bordered"
                      labelPlacement="outside"
                      type="number"
                      label="Teléfono"
                      placeholder="Ingrese número de teléfono"
                      className="w-1/2 px-2 py-2"
                      onChange={(e) => { setNewData({ ...newData, telefono: e.target.value }) }}
                      // startContent={
                      //   <div className="pointer-events-none flex items-center">
                      //     <span className="text-default-400 text-small"></span>
                      //   </div>
                      // }
                    />
                    <Input
                      variant="bordered"
                      labelPlacement="outside"
                      label="Dirección"
                      placeholder="Ingrese dirección"
                      className="w-1/2 px-2 py-2"
                      onChange={(e) => { setNewData({ ...newData, direccion: e.target.value }) }}
                      // startContent={
                      //   <div className="pointer-events-none flex items-center">
                      //     <span className="text-default-400 text-small"></span>
                      //   </div>
                      // }
                    />
                  </ModalBody>
                  <ModalFooter>
                    {/* <Button color="primary" onClick={() => setShowModal(false)}> */}
                    <Button color="primary" onClick={() => createNew()}>
                      Crear
                    </Button>
                    <Button color="danger" variant="flat" onClick={() => setShowModal(false)}>
                      Cerrar
                    </Button>
                  </ModalFooter>
                </>
              }
            </ModalContent>
          }

          {
            typeModal === "delete" &&
            <ModalContent>
              {
                <>
                  <ModalHeader className="flex flex-col gap-1 bg-tabs-blue text-white text-sm">ELIMINAR PROVEEDOR</ModalHeader>
                  <ModalBody className="flex flex-row flex-wrap gap-0">
                    <div className="px-2 py-2 text-gray-600 text-base leading-6 font-normal">{`Está seguro que desea eliminar "${data.nombre}" de forma permanente?`}</div>
                  </ModalBody>
                  <ModalFooter>
                    {/* <Button color="primary" onClick={() => setShowModal(false)}> */}
                    <Button color="primary" onClick={() => deleteItem(data)} >
                      Eliminar
                    </Button>
                    <Button color="danger" variant="flat" onClick={() => setShowModal(false)}>
                      Cerrar
                    </Button>
                  </ModalFooter>
                </>
              }
            </ModalContent>
          }

{
            typeModal === "edit" &&
            <ModalContent>
              {
                <>
                  <ModalHeader className="flex flex-col gap-1 bg-tabs-blue text-white text-sm">EDITAR PROVEEDOR</ModalHeader>
                  <ModalBody className="flex flex-row flex-wrap gap-0">
                    <Input
                      isRequired
                      autoFocus
                      variant="bordered"
                      labelPlacement="outside"
                      label="Nombre:"
                      placeholder="Ingrese Nombre"
                      className="w-1/2 px-2 py-2"
                      onChange={(e) => { setEditData({ ...editData, nombre: e.target.value }) }}
                      value={editData.nombre ? editData.nombre : ""}
                    />
                    <Input
                      isRequired
                      variant="bordered"
                      labelPlacement="outside"
                      type="number"
                      label="CUIL:"
                      placeholder="Ingrese CUIL"
                      className="w-1/2 px-2 py-2"
                      onChange={(e) => { setEditData({ ...editData, cuil: e.target.value }) }}
                      value={editData.cuil ? editData.cuil : ""}
                    />
                    <Input
                      variant="bordered"
                      labelPlacement="outside"
                      type="number"
                      label="Teléfono"
                      placeholder="Ingrese número de teléfono"
                      className="w-1/2 px-2 py-2"
                      onChange={(e) => { setEditData({ ...editData, telefono: e.target.value }) }}
                      value={editData.telefono ? editData.telefono : ""}
                    />
                    <Input
                      variant="bordered"
                      labelPlacement="outside"
                      label="Dirección"
                      placeholder="Ingrese dirección"
                      className="w-1/2 px-2 py-2"
                      onChange={(e) => { setEditData({ ...editData, direccion: e.target.value }) }}
                      value={editData.direccion ? editData.direccion : ""}
                    />
                  </ModalBody>
                  <ModalFooter>
                    {/* <Button color="primary" onClick={() => setShowModal(false)}> */}
                    <Button color="primary" onClick={() => editOne(data)}>
                      Guardar
                    </Button>
                    <Button color="danger" variant="flat" onClick={() => setShowModal(false)}>
                      Cerrar
                    </Button>
                  </ModalFooter>
                </>
              }
            </ModalContent>
          }

          
        </Modal>
        
    </>
  );
}

