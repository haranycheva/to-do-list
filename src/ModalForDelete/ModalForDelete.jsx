import { Component } from "react";
import { Btn, ModalBack, ModalWindow, Title } from "./ModalForDelete.styled";

export class ModalForDelete extends Component {
    handleEscape = (e) => {
        if(e.code === "Escape"){
          this.props.onClose()
        }
      }
      componentDidMount(){
        window.addEventListener("keydown", this.handleEscape)
      };
      componentWillUnmount(){
        window.removeEventListener("keydown", this.handleEscape)
      }
      handleClickBg = (e) =>{
        if(e.target === e.currentTarget){
          this.props.onClose()
        }
      }
  render() {
    return (
      <ModalBack onClick = {this.handleClickBg}>
        <ModalWindow>
        <Title>ARE YOU SURE???</Title>
        <Btn bgColor="red" onClick={this.props.onDelete}>delete</Btn>
        <Btn bgColor="green" onClick={this.props.onClose}>cancel</Btn>
        </ModalWindow>
      </ModalBack>
    );
  }
}
