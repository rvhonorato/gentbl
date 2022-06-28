import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

const Output = (props) => {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([String(props.value)], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "ambig.tbl";
    document.body.appendChild(element);
    element.click();
  };

  // let downloadOn = false;
  let tag = null;
  if (props.value) {
    tag = true;
  }

  return (
    <Card
      sx={{ minWidth: 350 }}
      style={{ margin: "20px", background: "#F9F6EE" }}>
      <CardContent>
        <pre>{props.value}</pre>
      </CardContent>
      <CardActions>
        <Button
          onClick={downloadTxtFile}
          startIcon={<GetAppIcon />}
          disabled={!tag}>
          Download
        </Button>
      </CardActions>
    </Card>
  );
};

export default Output;
