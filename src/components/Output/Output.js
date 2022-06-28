import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

const Output = (props) => {
  return (
    <Card
      sx={{ minWidth: 350 }}
      style={{ margin: "20px", background: "#F9F6EE" }}>
      <CardContent>
        <pre>
          ! {`\n`}! HADDOCK AIR restraints {`\n`}! {`\n`}
          {props.value}
        </pre>
      </CardContent>
      <CardActions>
        <Button startIcon={<GetAppIcon />} disabled>
          Download
        </Button>
      </CardActions>
    </Card>
  );
};

export default Output;
