import React, { ComponentProps } from "react"

const Profile: React.FC<ComponentProps<'svg'>> = ({...props}) => {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 200 200" enableBackground="new 0 0 200 200" 
   {...props}>
    <path fill="#282828" d="M135.832,140.848h-70.9c-2.9,0-5.6-1.6-7.4-4.5c-1.4-2.3-1.4-5.7,0-8.6l4-8.2c2.8-5.6,9.7-9.1,14.9-9.5
        c1.7-0.1,5.1-0.8,8.5-1.6c2.5-0.6,3.9-1,4.7-1.3c-0.2-0.7-0.6-1.5-1.1-2.2c-6-4.7-9.6-12.6-9.6-21.1c0-14,9.6-25.3,21.5-25.3
        c11.9,0,21.5,11.4,21.5,25.3c0,8.5-3.6,16.4-9.6,21.1c-0.5,0.7-0.9,1.4-1.1,2.1c0.8,0.3,2.2,0.7,4.6,1.3c3,0.7,6.6,1.3,8.4,1.5
        c5.3,0.5,12.1,3.8,14.9,9.4l3.9,7.9c1.5,3,1.5,6.8,0,9.1C141.432,139.148,138.632,140.848,135.832,140.848z M100.432,62.648
        c-9.7,0-17.5,9.6-17.5,21.3c0,7.4,3.1,14.1,8.2,18.1c0.1,0.1,0.3,0.2,0.4,0.4c1.4,1.8,2.2,3.8,2.2,5.9c0,0.6-0.2,1.2-0.7,1.6
        c-0.4,0.3-1.4,1.2-7.2,2.6c-2.7,0.6-6.8,1.4-9.1,1.6c-4.1,0.4-9.6,3.2-11.6,7.3l-3.9,8.2c-0.8,1.7-0.9,3.7-0.2,4.8
        c0.8,1.3,2.3,2.6,4,2.6h70.9c1.7,0,3.2-1.3,4-2.6c0.6-1,0.7-3.4-0.2-5.2l-3.9-7.9c-2-4-7.5-6.8-11.6-7.2c-2-0.2-5.8-0.8-9-1.6
        c-5.8-1.4-6.8-2.3-7.2-2.5c-0.4-0.4-0.7-1-0.7-1.6c0-2.1,0.8-4.1,2.2-5.9c0.1-0.1,0.2-0.3,0.4-0.4c5.1-3.9,8.2-10.7,8.2-18
        C117.932,72.248,110.132,62.648,100.432,62.648z"/>
    </svg>
  )
}

export default Profile