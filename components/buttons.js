import React from "react";
import {Button, useDisclosure} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil, faEye } from "@fortawesome/free-solid-svg-icons";


export default function TableButtons( {buttonCreateNew, buttonCreateNewText, deleteButtonHead, setShowModal, deleteButtonRow, editButtonRow, viewButtonRow, setTypeModal }) {
  
  const createNew = () => {
    setShowModal(true)
    setTypeModal("create")
	};

  return (
    <>
        {
          buttonCreateNew &&
          <Button 
            onClick={() => createNew()}
            className="h-7 bg-white rounded border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
            color="primary"
            >{buttonCreateNewText}
          </Button>
        }
        { deleteButtonHead &&
          <Button 
            name="deleteButton"
            color="warning" 
            size="sm" 
            aria-label="Delete"
            className="h-7 bg-white rounded border border-tabs-red text-tabs-red hover:bg-tabs-red hover:text-white"
            isIconOnly 
            variant="faded" 
          >
            <FontAwesomeIcon size="md" icon={faTrashCan} />
          </Button> 
        }

        { viewButtonRow &&
          <Button 
            // color="warning" 
            size="sm" 
            aria-label="View"
            className="bg-white rounded border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
            isIconOnly 
            variant="faded" 
          >
            <FontAwesomeIcon size="md" icon={faEye} />
          </Button>
        }

        { editButtonRow &&
          <Button 
            // color="warning" 
            size="sm" 
            aria-label="Edit"
            className="bg-white rounded border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
            isIconOnly 
            variant="faded" 
          >
            <FontAwesomeIcon size="md" icon={faPencil} />
          </Button>
        }

        { deleteButtonRow &&
          <Button 
            // color="warning" 
            size="sm" 
            aria-label="Delete"
            className="bg-white rounded border border-tabs-red text-tabs-red hover:bg-tabs-red hover:text-white"
            isIconOnly 
            variant="faded" 
          >
            <FontAwesomeIcon size="md" icon={faTrashCan} />
          </Button>
        }

    </>
  );
}

