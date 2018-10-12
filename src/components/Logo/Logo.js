import React, { Component } from 'react';
import Tilt from 'react-tilt';
import el from './el.jpg';
import './background.css'
import misli from './msc/misli.mp3'
import oskolki from './msc/oskolki.mp3'
import skuchau from './msc/skuchau.mp3'
import zver from './msc/zver.mp3'
import osen from './msc/osen.mp3'
import pohmel from './msc/pohmel.mp3'
import zaberi from './msc/zaberi.mp3'
import intro from './msc/intro.mp3'
import ugli from './msc/ugli.mp3'
import groza from './msc/groza.mp3'
import spichki from './msc/spichki.mp3'
import tonnel from './msc/tonnel.mp3'

var _ = require('lodash');

const slonSongs = [{song: "Мысли", mp3:misli},
					{song: "Осколки", mp3:oskolki},
					{song: "Скучаю", mp3:skuchau},
					{song: "Зверь", mp3:zver},
					{song: "Осень", mp3:osen},
					{song: "Похмельная", mp3:pohmel},
					{song: "Забери", mp3:zaberi},
					{song: "Интро", mp3:intro},
					{song: "Угли", mp3:ugli},
					{song: "Гроза", mp3:groza},
					{song: "Спички", mp3:spichki},
					{song: "Тоннель", mp3:tonnel}]

const randomSongs = _.sampleSize(slonSongs, 4);



class Logo extends Component {
  constructor() {
    super();
    this.state = {
      color:"",
      afteranswer:''      
    } 

  } 


  onClickEvent = (e) => {   
   this.setState({afteranswer: "Это правильный ответ! Вы, явно наш фанат!",
                  color:"dark-green"})
  }

  onErrClickEvent = (e) => {    
    this.setState({afteranswer: "Это неправильный ответ! Попробуйте еще раз!",
                  color:"dark-red"})    
  }

    onErr2ClickEvent = (e) => {    
    this.setState({afteranswer: "Это неправильный ответ! Повнимательнее послушайте отрывок еще раз!",
                  color:"dark-red"})    
  }

   onErr3ClickEvent = (e) => {    
    this.setState({afteranswer: "Это неправильный ответ! Странно, что вы не угадали! ",
                  color:"dark-red"})    
  }

  refresh = (e) => {
  	this.setState({afteranswer: "",
                  color:""}) 
  }

  render() {
    return (
      	<div className='form mt3 pa3 flex flex-column items-center br2 shadow-2'style={{ height: 600, width: 300}}>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 25, speed:2000, scale: 1.05,perspective: 300 }} style={{ height: 250, width: 250 }} >
 				<div className="Tilt-inner"> <img src={el} alt="elephant" height="250" width="250"/>
 					<audio className="Audio" controls id="beep" >              
		       			<source src={randomSongs[0].mp3} type="audio/mp3" />            
		  			</audio>
  			 	</div>	 
			</Tilt>			
			<div className="mt5" >
			<h2> Угадай мелодию!</h2>
			</div>
			<form className="dt"  >
				  <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-near-black" onClick={this.refresh}> Еще раз! </button> <br/>
				 <input onClick={this.onClickEvent} type="radio" name="gender" value="female" /> <label 
			  className="lh-copy link  black pv2 bg-animate hover-bg-green">{randomSongs[0].song}</label> <br/>			  

				  <input onClick={this.onErrClickEvent}  type="radio" name="gender" value="female"/><label 
				  className="lh-copy link  black pv2 bg-animate hover-bg-green ">{randomSongs[1].song}</label><br/>

			   		<input onClick={this.onErr2ClickEvent}  type="radio" name="gender" value="female"/><label 
				  className="lh-copy link  black pv2 bg-animate hover-bg-green ">{randomSongs[2].song}</label><br/>

				  <input onClick={this.onErr3ClickEvent}  type="radio" name="gender" value="female"/><label 
				  className="lh-copy link  black pv2 bg-animate hover-bg-green ">{randomSongs[3].song}</label>
				
			</form>
         
         	<div className="tc ">       
          		<h1 className={"b di tc pa1 f6 fw6 db no-underline underline-hover "+ this.state.color}>{this.state.afteranswer} </h1>                     
          	</div>

      	</div>	
     
    );
  }
}



export default Logo;


