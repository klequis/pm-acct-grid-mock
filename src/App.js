import { accounts } from "./accounts";
import { Grid } from "./styles";
import DropZone from "./DropZone";

const App = (props) => {
  return (
    <Grid>
      {accounts.map((a) => (
        <DropZone key={a.acctId} account={a} />
      ))}
    </Grid>
  );
};

export default App;
