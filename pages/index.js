import React from 'react';
import Link from 'next/link'

export default ()=>(
    <div>
        <h1>Hello World</h1>
        <Link href="/about?name=123">
            <h4>跳转</h4>
        </Link>
        <img src="img.png"></img>
    </div>
    
)