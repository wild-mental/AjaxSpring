function addBookmarkRequest() {
    const name = document.querySelector('input[name=name]').value;
    const url = document.querySelector('input[name=url]').value;
    const requestObject = {name: name, url: url};
    fetch('/bookmark', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestObject)
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(() => {
        alert("북마크 저장 완료.");
    })
    .catch(error => {
        console.error('Request failed', error);
    });
    return false;
}

function getBookmarkListRequest() {
    fetch('/bookmarks')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(bookmarks => {
        const bookmarkListDom = document.querySelector('#bookmark-list');
        bookmarkListDom.innerHTML = '';
        bookmarks.forEach(bookmark => {
            const liNode = document.createElement('li');
            const textNode = document.createTextNode(bookmark.name + ' - ' + bookmark.url);
            liNode.appendChild(textNode);
            bookmarkListDom.appendChild(liNode);
        });
    })
    .catch(error => {
        console.error('Request failed', error);
    });
}
