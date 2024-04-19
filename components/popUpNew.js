import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
// import {MailIcon} from './MailIcon.jsx';
// import {LockIcon} from './LockIcon.jsx';
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {animals} from "./data";
import TableButtons from "@/components/buttons";



export default function App({ showModal, setShowModal }) {
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
            base:"max-w-screen-lg",
            // body:"bg-red-800 w-1/2",
          }}
        >
          <ModalContent>
            {
              <>
                <ModalHeader className="flex flex-col gap-1 bg-tabs-blue text-white text-sm">AGREGAR NUEVO MATERIAL</ModalHeader>
                <ModalBody className="flex flex-row flex-wrap">
                  <Input
                    isRequired
                    autoFocus
                    endContent={""
                      // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Código Material:"
                    labelPlacement="outside"
                    placeholder="Código"
                    variant="bordered"
                    className="w-2/5"
                  />
                  <Input
                    isRequired
                    autoFocus
                    endContent={""
                      // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Nombre Material:"
                    labelPlacement="outside"
                    placeholder="Nombre"
                    variant="bordered"
                    className="w-2/5"
                  />
                  <Autocomplete 
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
                  </Autocomplete>
                  <Input
                    type="number"
                    label="Price"
                    placeholder="0.00"
                    labelPlacement="outside"
                    className="w-2/5"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                      </div>
                    }
                  />
                  
                            {/* <Autocomplete
                              variant={variant}
                              label="Favorite Animal"
                              placeholder="Search an animal"
                              className="max-w-xs"
                            >
                              {animals.map((animal) => (
                                <AutocompleteItem key={animal.value} value={animal.value}>
                                  {animal.label}
                                </AutocompleteItem>
                              ))}
                            </Autocomplete> */}
                        
                  {/* <Input
                    endContent={""
                      // <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                  /> */}
                  {/* <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox>
                    <Link color="primary" href="#" size="sm">
                      Forgot password?
                    </Link>
                  </div> */}
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
        </Modal>
        
    </>
  );
}

