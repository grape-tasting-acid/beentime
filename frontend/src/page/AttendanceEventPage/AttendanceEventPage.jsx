import React, { useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from '../AttendanceEventPage/Style';
import img from '../../Img/change.png';
import { useNavigate, useLocation } from 'react-router-dom';
import AttendanceEvent from '../../component/AttendanceEvent';
import instance from '../../api/instance';

const AttendanceEventPage = () => {
    const navigate = useNavigate();
    const [eventData, setEventData] = useState(null);
    const [timeList, setTimeList] = useState([]);
    const name = JSON.parse(sessionStorage.getItem('name'));
    const location = useLocation();
    const id = new URLSearchParams(location.search).get('eventId');

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(name)
                    const response = await instance.get(`/event/${id}`);
                    setEventData(response.data);
                    
                    console.log(response.data)

                    const timeList = response.data?.time.split(',').map(item => item.trim());
                    setTimeList(timeList);

                    const response1 = await instance.get(`/event/participationName`, {
                        params: {
                            name: name,
                            eventId: id
                        }
                    });
                    if(response1.data > 0) {
                        window.location.href = `${window.location.origin}/list?eventId=${encodeURIComponent(id)}`;
                    }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const onEditClick = () => {
        navigate('/');
    };

    console.log(eventData)

    return (
        <div css={S.Layout}>
            <div css={S.Header}>
                <div css={S.ImgBox}>
                    <img src={img} alt="" />
                </div>
                <div css={S.HeaderBox}>
                    <div css={S.HeaderItem}>
                        <h1>{eventData?.title}</h1>
                        <button onClick={onEditClick}>이벤트 수정</button>
                    </div>
                    <h3>{eventData?.detail}</h3>
                </div>
            </div>
            <AttendanceEvent eventData={eventData} timeList={timeList}/>
            <div css={S.BtnBox}>
                
            </div>
        </div>
    );
};

export default AttendanceEventPage;
