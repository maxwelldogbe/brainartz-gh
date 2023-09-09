// import 
function Service() {
   return (
      <>
         <div className="servicesViews">
            <section className="textiles">
               <div className="content">
                  <h3>Textiles</h3>
                  <p>lorem ipsum</p>
               </div>
               <div className="picture">
                  <img src='/images/textile.jpeg' alt="textile images" />
               </div>
            </section>

            <section className="branding">
               <div className="content">
                  <h3>Branding</h3>
               </div>
               <div className="picture">
                  <img src='/images/branding1.png' alt="textile images" />
               </div>
            </section>

            <section className="adverts">
               <div className="content">
                  <h3>Graphic Design</h3>
               </div>
               <div className="picture">
                  <img src='/images/flyer.jpeg' alt="textile images" />
               </div>
            </section>

            <section className="web-development">
               <div className="content">
                  <h3>Web Developer</h3>
               </div>
               <div className="picture">
                  <img src='/images/Gradient geometric background.jpeg' alt="web design images" />
               </div>
            </section>

            <section className="photography">
               <div className="content">
                  <h3>Photography</h3>
               </div>
               <div className="picture">
                  <img src='/images/camera2.jpeg' alt="photograph images" />
               </div>
            </section>
         </div>
      </>
   );
}

export default Service;     