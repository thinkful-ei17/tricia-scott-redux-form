import {SubmissionError} from 'redux-form';


const fetchCall = values => {
    console.log('values in fetch call:', values);
    debugger
    const URL="https://us-central1-delivery-form-api.cloudfunctions.net/api/report"
    const postData = {
        "trackingNumber": values.trackingNumber,        // This should be a string - leading zeros are allowed
        "issue": values['delivery-issue-list'],         // One of "not-delivered", "wrong-item", "missing-part", "damaged", or "other"
        "details": values['other-issue']  // Optional
    };
    console.log('postData:', JSON.stringify(postData));
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }

    });
}


export const makePost = values => dispatch => {
    debugger
    return fetchCall(values)
    .then(res => {
        if(!res.ok){
            if(
                res.headers.has('content-type') &&
                res.headers
                    .get('content-type')
                    .startsWith('application/json')
            ) {
                return res.json()
                .then(err => Promise.reject(err));
            }
            return Promise.reject({
                code: res.status,
                message: res.statusText
            });
        }
        return res.json();
    })
    .then(res => res)
    .catch(error => { //console.error(error));
        if (error.reason === 'ValidationError') {
            return Promise.reject(
                new SubmissionError({
                    [error.location]: error.message
                })
            );
        }
    });
        // return Promise.reject(
        //     new SubmissionError({
        //         _error: "Your form could not submit at this time."
        //     })
        // );       
}
