import React from "react";
import Bracket from "./components/Composition/Bracket";
import Emoji from "./components/Composition/Emoji";
import Text from "./components/Composition/Text";








function App() {

  return (

    <Emoji>
      {({ addEmoji }) => (
        <Bracket>
          {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket}></Text>}
        </Bracket>
      )}
    </Emoji>

  );


}

export default App;
