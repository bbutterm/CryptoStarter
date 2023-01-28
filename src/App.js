const data = require("./db.json")
function App(props) {
  const id = props.id;
  console.log(data[id])
  return (
    <>
      <div class="page">
        <div class="table2">Gather Name</div>
        <div class="table-group">
          <div class="table1">
            The second kind of rollup is a Zero-Knowledge rollup, also known as a ZK-rollup. These protocols use a complex piece of cryptography called a Zero-Knowledge proof to determine that a transaction is valid using only minimal information about that transaction. It’s privacy-preserving, sleek and, most important, fast and cheap. Compared with an Optimistic rollup, which requires funds to stay on the network until the dispute resolution period has closed, ZK-rollups allow users to withdraw their funds with less of a delay.
          </div>
          <div class="table-group2">
            <div class="table2">
              Necessary: 100 ETH
              Gained: 30 ETH
            </div>
            <div class="table2">
              <div class="form-row">
                <label for="full-name">Input eth</label>
                <input id="full-name" name="full-name" type="text" />
              </div>
              <div class="form-row">
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
