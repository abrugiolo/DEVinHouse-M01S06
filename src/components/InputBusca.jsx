import { IconButton, InputAdornment, Paper, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const InputBusca = ({ value, onChange }) => {
  return (
    <div id="inputBusca">
      <Paper>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          autoFocus
          value={value}
          onChange={onChange}
          placeholder="Pesquise por uma informação do processo..."
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </div>
  );
};

export default InputBusca;
