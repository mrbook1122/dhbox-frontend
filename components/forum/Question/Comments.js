import axios from "axios";
import styled from "styled-components";
import {useState} from 'react'

import CommentItem from "./CommentItem";
import Input from "./Input";

const Container = styled.div`
    border: 1px solid #ebebeb;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    margin-top: 12px;
    border-radius: 4px;
`

const CommentCountContainer = styled.div`
    display: flex;
    height: 50px;
    padding: 0 20px;
    align-items: center;
    border-bottom: 1px solid #f6f6f6;
    
    h2 {
        font-weight: 600;
        font-size: 16px;
    }
`

// 评论数量
const CommentCount = props => {
    return (
        <CommentCountContainer>
            <h2>{props.num} 条评论</h2>
        </CommentCountContainer>
    )
}

/**
 * 问题的回答的评论列表
 */
const Comments = props => {
    const [value, setValue] = useState('')
    console.log(props.pId)
    const publishComment = () => {
        console.log('onclick')
        axios.put('/api/topic/' + props.topicId + '/comment', {
            content: value,
            pId: props.pId
        }, {
            headers: {
                Token: localStorage.getItem('Token')
            }
        }).then(resp => {
            if (resp.data.code === 200) {
                location.reload()
            }
        }).catch(() => {
        })
    }
    return (
        <Container>
            <CommentCount num={props.comments.length}/>
            {props.comments.map(comment => <CommentItem comment={comment}/>)}
            <Input onClick={publishComment} value={value} onChange={e => setValue(e.target.value)}/>
        </Container>
    )
}

export default Comments