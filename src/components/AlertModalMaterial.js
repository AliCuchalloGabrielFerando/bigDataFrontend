import React from "react";
import { Alert, Typography, Spinner } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
 
export default function AlertModalMaterial() {
 
  return (
    <React.Fragment>
      <div>
      <Alert
        open={true}
        color="blue"
        className="max-w-screen-md"
        icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
        
      >
        <Typography variant="h5" color="white">
          Cargando
        </Typography>
        <Typography color="white" className="mt-2 font-normal">
          Se esta ejecutando la operacion por favor espere
        </Typography>
        <Spinner className="h-10 w-10" />
      </Alert>
      </div>
    </React.Fragment>
  );
}