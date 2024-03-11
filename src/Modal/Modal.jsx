import { Component } from "react";
import { ModalBack, ModalWindow, CloseBtn } from "./Modal.styled";


export class Modal extends Component {
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
        <ModalWindow>{this.props.children}</ModalWindow>
        <CloseBtn onClick={this.props.onClose}>x</CloseBtn>
      </ModalBack>
    );
  }
}
