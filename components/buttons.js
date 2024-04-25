import React, {useEffect} from "react";
import {Button, useDisclosure} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil, faEye } from "@fortawesome/free-solid-svg-icons";


export default function TableButtons( {data, setData, buttonCreateNew, buttonCreateNewText, deleteButtonHead, setShowModal, deleteButtonRow, editButtonRow, viewButtonRow, setTypeModal }) {
  
  const createNew = () => {
    setTypeModal("create")
    setShowModal(true)
	};

  // console.log("data",data)

  const deleteOne = (id) => {
    setTypeModal("delete")
    setData(data)
    console.log("data2",data)
    setShowModal(true)
    console.log("delete one",id)
  };

  const editOne = (id) => {
    setTypeModal("edit")
    setData(data)
    console.log("dataEdit",data)
    setShowModal(true)
    console.log("edit one",id)
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
            <FontAwesomeIcon size="sm" icon={faTrashCan} />
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
            <FontAwesomeIcon size="sm" icon={faEye} />
          </Button>
        }

        { editButtonRow &&
          <Button 
            onClick={() => editOne(data.id)}
            // color="warning" 
            size="sm" 
            aria-label="Edit"
            className="bg-white rounded border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
            isIconOnly 
            variant="faded" 
          >
            <FontAwesomeIcon size="sm" icon={faPencil} />
          </Button>
        }

        { deleteButtonRow &&
          <Button 
          onClick={() => deleteOne(data.id)}
            // color="warning" 
            size="sm" 
            aria-label="Delete"
            className="bg-white rounded border border-tabs-red text-tabs-red hover:bg-tabs-red hover:text-white"
            isIconOnly 
            variant="faded" 
          >
            <FontAwesomeIcon size="sm" icon={faTrashCan} />
          </Button>
        }

    </>
  );
}

