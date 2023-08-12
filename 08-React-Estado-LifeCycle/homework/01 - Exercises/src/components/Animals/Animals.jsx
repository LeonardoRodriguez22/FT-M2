import React from "react";
// import styledAnimals from './Animals.module.css'

class Animals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.animals.map((animal) => {
          return (
            <div key={index}>
              <h5>{animal.name}</h5>
              <img src={animal.image} alt="animal.name" width="300px" />
              <br />
              <span>{animal.specie}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Animals;
