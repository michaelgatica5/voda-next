import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
// import {MailIcon} from './MailIcon.jsx';
// import {LockIcon} from './LockIcon.jsx';
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {animals} from "./data";
import TableButtons from "@/components/buttons";



export default function App({ showModal, setShowModal, typeModal }) {
  // const {isOpen, onOpen, onOpenChange} = useDisclosure(true);
  const variants = ["flat", "bordered", "underlined", "faded"];

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
                    />
                    <Input
                      isRequired
                      variant="bordered"
                      labelPlacement="outside"
                      type="number"
                      label="CUIL:"
                      placeholder="Ingrese CUIL"
                      className="w-1/2 px-2 py-2"
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
                      // startContent={
                      //   <div className="pointer-events-none flex items-center">
                      //     <span className="text-default-400 text-small"></span>
                      //   </div>
                      // }
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={() => setShowModal(false)}>
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
          
        </Modal>
        
    </>
  );
}

