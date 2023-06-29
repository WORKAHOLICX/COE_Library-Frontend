import axios from "../utils/axios"

export const getFiles = (path, lecture_name) => {
    const {ID, name, year, semester, ext} = path[0] ;
        
        axios({
            url: `/program/${ID}/${year}/${semester}/${name}/${lecture_name}`, 
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            // create file link in browser's memory
            const href = URL.createObjectURL(response.data);
        
            // create "a" HTML element with href to file & click
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', `${lecture_name}.${ext}`); //or any other extension
            document.body.appendChild(link);
            link.click();
        
            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(`/program/${ID}/${year}/${semester}/${name}/${lecture_name}`);
        }).catch(()=> {
            alert(`${lecture_name} is not available`)
        });
    
}

export const displayFile =  (path, lecture_name) => {
    const {ID, name, year, semester, ext} = path[0] ;
    switch (ext) {
        case "pdf":
    axios({
        url: `/program/${ID}/${year}/${semester}/${name}/${lecture_name}`, 
        method: 'GET',
        responseType: 'blob', // important
    }).then((response) => {
        // create file link in browser's memory
        
                const file = new Blob([response.data], {type: `application/${ext}`})
                const href = URL.createObjectURL(file);
                window.open(href)
    }).catch(()=> {
        alert(`${lecture_name} is not available`)
    })
break;
case "pptx":
                alert("Cannot View powerpoint in browser for now, please download")
                break;
            default:
                break;
        }
}

