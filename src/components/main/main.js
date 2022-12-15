import React from 'react'
import { connect } from 'react-redux'
import Headline from './Headline'
import Navigation from './Navigation'
import Article from '../article/Article'
import Following from './Following'
//basic structure for main page
export const Main = () => (
    <div className="bigBox">
    <header>
        <Navigation/>
    </header>
    <h1>Welcome to Main Page</h1>
    <table >
		<th>
			 <Headline/>	
			 <Following followings={require('../../data/followers.json').followings}/>
		</th>
		<th>
			<Article/>
		</th>
    
		   </table>
</div>
)

export default connect(
)(Main)

//add new user to users