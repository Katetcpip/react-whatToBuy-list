import 'components/ReviewPage/styles.css';

const ReviewPage = () =>{
    return(
        // <div classNameName='minHeight mt-20 text-center text-7xl text-gray-400 font-thin'>Waiting soon...</div>


    <div className="flex justify-center minHeight items-start">
      <div className="content">
        <div className="left-side flex justify-center">

          <div className="address details">  
            <div className="topic">Adress</div>
            <div className="text-one">Moscow</div>
            <div className="text-two">Stroiteley St., bldng 5</div>
          </div>

          <div className="phone details">
            <div className="topic">Phone</div>
            <div className="text-one">8-999-999-99-99</div>
            <div className="text-two">8-800-555-35-35</div>
          </div>
          
          <div className="email details">
            <div className="topic">Email</div>
            <div className="text-one">wishBuy@mail.ru</div>
            <div className="text-two">helpyou@uandex.ru</div>
          </div>

        </div>
     
        <div className="right-side">     
          <div className="topic-text">Send a message</div>    
          <p>
            If you have any questions or suggestions fill out the form below
          </p> 
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Phone number" />
            </div>
            <div className="input-box message-box">
              <textarea placeholder="Your thoughts"></textarea>
            </div>
            <img className='h-28 w-28 -mt-6 -mb-10 -mr-4' src='https://pluspng.com/img-png/wet-cat-png-cutout-2000.png'></img>
            <div className="button">
              <input type="button" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default ReviewPage;