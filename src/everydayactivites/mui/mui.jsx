import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

 function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      {/* <Button color="secondary">Secondary</Button> */}
      <Button variant="contained" color="success">
        Success
      </Button>
      {/* <Button variant="outlined" color="error">
        Error
      </Button> */}
    </Stack>
  );
}
export default ColorButtons;