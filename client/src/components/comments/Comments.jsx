import React, { useState } from 'react'
import './comments.css'
import Image from '../image/Image'
import EmojiPicker from 'emoji-picker-react'

export const Comments = () => {
  const [open,setOpen] = useState(false)

  return (
    <div className='comments'>
      <div className="commentList">
        <span className='commentCount'>5 comments</span>
        {/* COMMENT */}
        <div className='comment'>
          <Image path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        {/* COMMENT */}
        <div className='comment'>
          <Image path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        {/* COMMENT */}
        <div className='comment'>
          <Image path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        {/* COMMENT */}
        <div className='comment'>
          <Image path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
      </div>
      <form className='commentForm'>
        <input type="text" placeholder='Add a comment'/>
        <div className='emoji'>
          <div onClick={() => setOpen((prev) => !prev)}>😊</div>
          {
            open &&
              <div className='emojiPicker'>
                <EmojiPicker />
              </div>
          }
          
        </div>
      </form>
    </div>
  )
}
