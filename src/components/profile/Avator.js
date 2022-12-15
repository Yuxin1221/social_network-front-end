import React from 'react'
import { connect } from 'react-redux'

export const Avator = () => (
    <div>
    	<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqz9MnPJ35eUCWZeGAQc3UcQQ982UywRBKA&usqp=CAU'/>
    	<br/>
    	<input className="btn" type="file"/> 
    	<br/><br/><br/>
    </div>
)
//profile avator 

export default connect(
)(Avator)