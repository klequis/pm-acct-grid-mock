/* ORIGINAL */
import { Grid, Article, Box } from "./appStyles";
import { accounts } from "./accounts";

const Account = ({ account }) => {
  console.log("account", account);
  return (
    <Article>
      <h1>
        {account.acctName} (x{account.acctNumber})
      </h1>
      <Box />
      <p>
        This is the best computer money can buy, if you don’t have much money.
      </p>
    </Article>
  );
};

function App() {
  return (
    <Grid>
      {accounts.map((a) => (
        <Account account={a} />
      ))}
    </Grid>
  );
}

export default App;
