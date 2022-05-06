import React from "react";

const Blogs = () => {
  return (
    <div className="">
      <h1 className="text-info pt-5">Blog Page</h1>
      <div className="container">
        <div className="text-bold row">
          <h5 className="text-success pt-4 pb-3">
            Difference between javaScript and nodeJs
          </h5>
          <div className="d-flex rounded-3">
            <div className="col-lg-6 col-12 border">
              <h6 className="text-dark bolder pt-3">javaScript</h6>
              <hr />
              <p className="p-4">
                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script.
                Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
              </p>
            </div>
            <div className="col-lg-6 col-12 border">
              <h6 className="text-dark bolder pt-3">NodeJs</h6>
              <hr />
              <p className="p-4">
              NodeJS is a cross-platform and opensource Javascript runtime
                environment that allows the javascript to be run on the
                server-side.
                Nodejs allows Javascript code to run outside the browser. Nodejs
                comes with a lot of modules and mostly used in web development.
              </p>
            </div>
          </div>
        </div>
        {/* another blog */}
        <div className="text-bold row">
          <h5 className="text-success pt-5 pb-3">
          When should you use nodeJs and when should you use mongodb
          </h5>
          <div className="d-flex rounded-3">
            <div className="col-lg-6 col-12 border">
              <h6 className="text-dark bolder pt-3">When should you use nodeJs</h6>
              <hr />
              <p className="p-4">
              Nodejs is a Javascript engine that you can write any application you want with by programming in the Javascript language.
               It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
              </p>
            </div>
            <div className="col-lg-6 col-12 border">
              <h6 className="text-dark bolder pt-3">when should you use mongodb</h6>
              <hr />
              <p className="p-4">
              MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add,
               query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...
              </p>
            </div>
          </div>
        </div>
       {/* another blog */}
       <div className="text-bold row">
          <h5 className="text-success pt-5 pb-3">
          Differences between sql and nosql databases.
          </h5>
          <div className="d-flex rounded-3">
            <div className="col-lg-6 col-12 border">
              <h6 className="text-dark bolder pt-3">sql database</h6>
              <hr />
              <p className="p-4">
              Databases are categorized as Relational Database Management System RDBMS.
              SQL databases have fixed or static or predefined schema.
              SQL databases display data in form of tables so it is known as table-based database.
              SQL databases are vertically scalable. SQL databases use a powerful language "Structured Query Language" to define and manipulate the data.
              SQL databases are best suited for complex queries. SQL databases are not best suited for hierarchical data storage.
              </p>
            </div>
            <div className="col-lg-6 col-12 border">
              <h6 className="text-dark bolder pt-3">nosql database</h6>
              <hr />
              <p className="p-4">
              NoSQL databases are categorized as Non-relational or distributed database system.
              NoSQL databases have dynamic schema. NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.
              NoSQL databases are horizontally scalable. In NoSQL databases, collection of documents are used to query the data. It is also called unstructured query language. It varies from database to database.
              NoSQL databases are not so good for complex queries because these are not as powerful as SQL queries.
              NoSQL databases are best suited for hierarchical data storage.
              </p>
            </div>
          </div>
        </div>
        {/* another blog */}
        <div className="text-bold row">
          <h5 className="text-success pt-5 pb-3">
          What is the purpose of jwt and how does it work
          </h5>
          <div className="d-flex rounded-3">
            <div className="col-lg-6 col-12 border">
              <h6 className="text-dark bolder pt-3">What is the purpose of jwt</h6>
              <hr />
              <p className="p-4">
              JSON Web Tokens, or just JWTs pron. are the new fancy kids around the block when it comes to transporting proofs of identity within 
              an untrusted environment like the Web. In this article, I will describe the true purpose of JWTs. I will compare classical, 
              stateful authentication with modern, stateless authentication. And I will explain why it is important to understand 
              the fundamental difference of both approaches.
              </p>
            </div>
            <div className="col-lg-6 col-12 border">
              <h6 className="text-dark bolder pt-3">how does jwt work</h6>
              <hr />
              <p className="p-4">
              JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties.
               What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for,
                or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots and serialized using base64.
                 In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
