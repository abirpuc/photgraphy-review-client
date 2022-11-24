import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary">Difference between SQL and NoSQL?</h2>
                    <div className='mt-2'>
                        <h1 className='text-2xl text-primary'>SQL:</h1>
                        <div className='indent-4'>
                            <p className='text-xl indent'>1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                            <p className='text-xl indent'>2.These databases have fixed or static or predefined schema</p>
                            <p className='text-xl indent'>3.These databases are not suited for hierarchical data storage.</p>
                            <p className='text-xl indent'>4.These databases are best suited for complex queries</p>
                        </div>
                        <h1 className='text-2xl text-primary'>NOSQL:</h1>
                        <div className='indent-4'>
                            <p className='text-xl indent'>1.Non-relational or distributed database system.</p>
                            <p className='text-xl indent'>2.They have dynamic schema</p>
                            <p className='text-xl indent'>3.These databases are best suited for hierarchical data storage.</p>
                            <p className='text-xl indent'>4.These databases are not so good for complex queries.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-full mt-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary">What is JWT, How it's Work?</h2>
                    <div className='mt-2'>
                        <h1 className='text-2xl text-primary'>JWT:</h1>
                        <div className='indent-4'>
                            <p className='text-xl indent'>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                        </div>
                        <h1 className='text-2xl text-primary'>Working Process:</h1>
                        <div className='indent-4'>
                            <p className='text-xl indent'>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-full mt-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary">What is the difference between javascript and NodeJS?</h2>
                    <div className='mt-2'>
                        <h1 className='text-2xl text-primary'>Javascript:</h1>
                        <div className='indent-4'>
                            <p className='text-xl indent'>1.Javascript is a programming language that is used for writing scripts on the website. </p>
                            <p className='text-xl indent'>2.Javascript can only be run in the browsers.</p>
                            <p className='text-xl indent'>3.It is basically used on the client-side.</p>
                            <p className='text-xl indent'>4.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</p>
                        </div>
                        <h1 className='text-2xl text-primary'>NodeJS:</h1>
                        <div className='indent-4'>
                            <p className='text-xl indent'>1.NodeJS is a Javascript runtime environment.</p>
                            <p className='text-xl indent'>2.We can run Javascript outside the browser with the help of NodeJS.</p>
                            <p className='text-xl indent'>3.It is mostly used on the server-side.</p>
                            <p className='text-xl indent'>4.V8 is the Javascript engine inside of node.js that parses and runs Javascript..</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-full mt-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary">How does NodeJS handle multiple requests at the same time?</h2>
                    <div className='mt-2'>
                        
                        <div className='indent-4'>
                            <p className='text-xl indent'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;