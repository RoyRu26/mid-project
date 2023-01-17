import React, { useState, useEffect, useRef } from "react";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Box } from "@mui/system";
import "./Activities.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function PhotoSlider() {
    const imgRef = useRef(null);
    const [index, setIndex] = useState(0)
    const infiLoopPlus = () => {
        imgRef.current.className = "swing-left-fwd-reverse";

        // setIndex(index < photos.length - 1 ? index+1 : 0);
        if (index < photos.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }
    const infiLoopMinus = () => {
        imgRef.current.className = "swing-left-fwd";

        // setIndex(index > 0 ? index-1 : photos.length-1)
        if (index > 0) {
            setIndex(index - 1)
        } else {
            setIndex(photos.length - 1)
        }
    }
    const photos = [
        {
            photoKey: 1,
            photoPath: 'https://media.istockphoto.com/id/1408412193/photo/supporting-their-community.jpg?s=612x612&w=0&k=20&c=SMLFd5XLs0v0CdQd_srffs3HNWwks-Wv3BquHXqP4Mo='
        },
        {
            photoKey: 2,
            photoPath: 'https://media.istockphoto.com/id/1357789296/photo/children-boys-and-girls-help-each-other-plant-trees-in-the-forest-learn-about-the-environment.jpg?s=612x612&w=0&k=20&c=3-Toe8qIncz4OHetFSefANFH4AY9TsGg8kwrStg-A1E='
        },
        {
            photoKey: 3,
            photoPath: 'https://media.istockphoto.com/id/114370359/photo/multi-ethnic-volunteer-group-hands-together.jpg?s=612x612&w=0&k=20&c=o1p3CMd2y1D2yMysCI-0t46Kh_ssXIv_98Fs2wKiNU4='
        },
        {
            photoKey: 4,
            photoPath: 'https://media.istockphoto.com/id/1211548998/photo/caring-for-wild-animals.jpg?s=612x612&w=0&k=20&c=T6TLgg9aM2ItIyw2vWdMNbfnh68MXkYd350esWJS2nM='
        },
        {
            photoKey: 5,
            photoPath: 'https://media.istockphoto.com/id/1382388660/photo/volunteering-in-the-greenhouse.jpg?s=612x612&w=0&k=20&c=K2TQqYRgirSZAhJZEywGcY9qlrGQ0otlt5jRHmU6Knk='
        },
        {
            photoKey: 6,
            photoPath: 'https://images.unsplash.com/photo-1618477462146-050d2767eac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1hbHMlMjB2b2x1bnRlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            photoKey: 7,
            photoPath: 'https://images.unsplash.com/photo-1591533985118-6d96683b1340?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFscyUyMHZvbHVudGVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            photoKey: 8,
            photoPath: 'https://media.istockphoto.com/id/477586286/photo/diver-and-shark.jpg?b=1&s=170667a&w=0&k=20&c=R9BksLlRICtiasiBRoSBGTXUuWvu3cb_2OE98itDRc4='
        },
        {
            photoKey: 9,
            photoPath: 'https://media.istockphoto.com/id/491842956/photo/woman-feeding-baby-deer.jpg?s=612x612&w=0&k=20&c=TTcBQc2ET-9LqPPxws1FJfTmI1FIbewI_XFJVP5YCAU='
        },
        {
            photoKey: 10,
            photoPath: 'https://media.istockphoto.com/id/183377864/photo/nesting-turtle-and-tourist.jpg?s=612x612&w=0&k=20&c=WrXfiHtl5qTuo72oto8fO_53Cb7R5fiWauXJRirHUIQ='
        },
        {
            photoKey: 11,
            photoPath: 'https://images.unsplash.com/photo-1576647025587-2b77cd953cba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2lsZGxpZmUlMjBhbmQlMjBodW1hbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            photoKey: 12,
            photoPath: 'https://media.istockphoto.com/id/1202599293/photo/woman-feed-kangaroo.jpg?s=612x612&w=0&k=20&c=UBruNJZJR7bnhCcGeZ-QcL05HDpm5ZWJoWHI10Jly_I='
        },
        {
            photoKey: 13,
            photoPath: 'https://media.istockphoto.com/id/1130655067/photo/volunteers-planting-a-tree.jpg?s=612x612&w=0&k=20&c=LN2OT16Fg46ghQ3xjGh8-95awNIpLkoHXJ8ADRIVLnU='
        },

    ]

    useEffect(() => {
        setTimeout(() => {
            imgRef.current.className = "";
        }, 600)
    }, [index]);

    return (
        <div style={{marginTop:'3.6%', backgroundColor: 'white', width: '100vw', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url('https://wallpapercrafter.com/th800/217070-wallpaper-nature-wallpapers-nature-backgrounds-and.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Box className='BoxClass' sx={{ bgcolor: 'rgba(255,255,255,.6)' }} height='100vh' width='100vw' display='flex' displayFlex='row' justifyContent='center' alignItems='center'>
                <ArrowBackIosIcon color='secondary' sx={{ cursor: 'pointer', marginRight: '3%' }} onClick={infiLoopPlus}><NavigateBefore /></ArrowBackIosIcon>
                <div className="big">
                    <div className="SliderDiv" >
                        <img ref={imgRef} src={`${photos[index]?.photoPath}`} />
                    </div>
                </div>
                <ArrowForwardIosIcon color='secondary' sx={{ cursor: 'pointer', marginLeft: '3%' }} onClick={infiLoopMinus}><NavigateNext /></ArrowForwardIosIcon>
            </Box>
        </div>
    )
}

export default PhotoSlider


