import { Card, Typography, Button } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Nombre", "Edad", "Correo", "Opciones"];
 
export default function TableUserMaterial(props) {
  return (
    <Card className="overflow-scroll md:overflow-hidden">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.usersData.map(({_id, name, age, email }, index) => {
            const isLast = index === props.usersData.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={_id}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {age}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                <Button size="lg" onClick={() => props.eliminar(_id)} color="red">Eliminar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}