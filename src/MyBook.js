import HTMLFlipBook from 'react-pageflip';
import './MyBook.css'
import Page from './Page';

function MyBook(props) {
    return (
        <HTMLFlipBook width={1000} height={1080} autoSize={true} showCover={true}>
            <Page />
            <div className="demoPage">Page 2번</div>
            <div className="demoPage">Page 3번</div>
            <div className="demoPage">Page 4번 입니다</div>
            <div className="demoPage">Page 4번 입니다</div>
            <div className="demoPage">Page 4번 입니다</div>
            <div className="demoPage">Page 4번 입니다</div>
            <div className="demoPage">Page 4번 입니다</div>
            <div className="demoPage">Page 4번 입니다</div>
            <div className="demoPage">Page 4번 입니다</div>
            <div className="demoPage">Page 4번 입니다</div>
            <div className="demoPage">Page 4번 입니다</div>
            <div className="demoPage">Page 4번 입니다</div>
        </HTMLFlipBook>
    );
}

export default MyBook;