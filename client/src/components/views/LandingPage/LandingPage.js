import React, { useEffect } from "react";
import axios from "axios";

// 두개의 다른 포트를 가지고 있는 서버는 아무 설정없이 request를 보낼 수 없다. why? Cors(Cross - Origin - Resources Sharing) 보안정책때문에
// 우리는 back과 front 둘 다 control 가능하기 때문에 proxy를 사용할거임!
function LandingPage() {
    useEffect(() => {
        axios
            .get("/api/hello") // getRequest를 서버에 보냄 endpoint = /api/hello
            .then((response) => console.log(response)); // 서버에서 돌아오는 response를 console창에 보여줘라!
    }, []);

    return <div>LandingPage 랜딩페이지</div>;
}

export default LandingPage;
