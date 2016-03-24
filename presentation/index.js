// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


const images = {
  kitchen: require("../assets/kitchen.jpg"),
  transpilers: require("../assets/transpilers.png"),
  typescript: require("../assets/typescript.png"),
  homepage: require("../assets/home-page.png"),
  components: require("../assets/components.png"),
  logo: require("../assets/js-logo.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#E0615F"
});



const tableStyle = {padding:'10px',width:'100%'};

const paneStyle = {"fontSize":'20px'};
const paneStyleSmall = {"fontSize":'18px'};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
        <Slide transition={["zoom"]}  bgImage={images.kitchen.replace("/", "")} bgDarken={0.50}>
          <Heading fit caps lineHeight={1} textColor="primary">
              Intro to Angular 2
          </Heading>
          <Heading size={1} fit caps>
              Steam Learn - Inovia 2016
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
           <Text textSize="1.5em" margin="20px 0px 0px" bold>Big up for the @steamlearn team! </Text> 
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
           <Text textSize="1.5em" margin="20px 0px 0px" bold>
           Angular 2 is a framework in typescript.
It is designed for mobile-first.
</Text> 
        </Slide>

          <Slide bgColor="black">
             <List textColor="primary">
              <Appear><ListItem>Components</ListItem></Appear>
              <Appear><ListItem>Bindings</ListItem></Appear>
              <Appear><ListItem>Template language</ListItem></Appear>
              <Appear><ListItem>Extras</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading fit caps textColor="black">Demo App</Heading>
            <Image  height="500px" src={images.homepage.replace("/", "")}></Image>
        </Slide>

         <Slide>
            <Heading fit caps textColor="black">Components</Heading>
            <Image  height="500px" src={images.components.replace("/", "")}></Image>
        </Slide>


           <Slide transition={["slide"]} bgColor="primary">   
          <Heading textColor="black">Component</Heading>         
          <CodePane
              lang="typescript"
              source={ require("raw!../presentation/component.example") }
              margin="20px auto" 
              style={paneStyle}
            />
          </Slide>


        <Slide transition={["slide"]} bgColor="primary">   
          <Heading textColor="black">Model</Heading>         
          <CodePane
              lang="js"
              source={ require("raw!../presentation/model.example") }
              margin="20px auto" 
              style={paneStyle}
            />
            <Text textSize="1.5em" margin="20px 0px 0px" bold>
          Uses JS/TS model/services.
            </Text>
          </Slide>


          <Slide transition={["slide"]} bgColor="primary">   
          <Heading textColor="black">Compose and IN/OUT</Heading>         
          <CodePane
              lang="js"
              source={ require("raw!../presentation/compose.example") }
              margin="20px auto" 
              style={paneStyle}
            />
          </Slide>


          <Slide transition={["slide"]} bgColor="primary">   
          <Heading textColor="black">Double way binding</Heading>         
          <CodePane
              lang="js"
              source={ require("raw!../presentation/compose2.example") }
              margin="20px auto" 
              style={paneStyle}
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">   
          <Heading textColor="black">Templating</Heading>         
          <CodePane
              lang="js"
              source={ require("raw!../presentation/template.example") }
              margin="20px auto" 
              style={paneStyle}
            />
          </Slide>
          <Slide bgColor="black">
           <Heading fit caps lineHeight={1} textColor="primary">
              Extras
          </Heading>
          </Slide>

           <Slide bgColor="primary">
           <Heading fit caps lineHeight={1} textColor="black">
            Parts we didn't talk about
          </Heading>
             <List textColor="black">
              <Appear><ListItem>Routing</ListItem></Appear>
              <Appear><ListItem>HTTP</ListItem></Appear>
              <Appear><ListItem>Form Control and Form Builder</ListItem></Appear>
              <Appear><ListItem>Dependency Injection</ListItem></Appear>
              <Appear><ListItem>RxJS</ListItem></Appear>
            </List>
          </Slide>

           <Slide bgColor="primary">
           <Heading fit caps lineHeight={1} textColor="black">
              Migrations
          </Heading>
             <List textColor="black">
              <Appear><ListItem>Use A2 Components in A1 app</ListItem></Appear>
              <Appear><ListItem>Use A1 directives in A2</ListItem></Appear>
              <Appear><ListItem>DI compatibility for services</ListItem></Appear>
              <Appear><ListItem>Change detection compatibility</ListItem></Appear>
            </List>
            <Appear><Text textSize="1.5em" margin="20px 0px 0px" bold>
          All is provided by Angular 2.
            </Text></Appear>
          </Slide>

            <Slide bgColor="black">
           <Heading fit caps lineHeight={1} textColor="primary">
              To sum up
          </Heading>
             <List textColor="primary">
             <Appear><ListItem>Complete framework in beta</ListItem></Appear>
              <Appear><ListItem>Use WebComponents</ListItem></Appear>
              <Appear><ListItem>With a custom templating engine</ListItem></Appear>
              <Appear><ListItem>Progressive migration from A1 is possible</ListItem></Appear>
            </List>
          </Slide>


           <Slide transition={["slide"]} bgColor="primary"> 
             <Heading fit caps textColor="black">Thank you everyone!</Heading>
              <Text textSize="1.5em" margin="20px 0px 0px" bold>Follow us @steamlearn team! @batmansmk @inoviateam </Text> 
           </Slide>



        </Deck>
      </Spectacle>
    );
  }
}
