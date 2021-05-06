const fetchIssueRequest = () => {
    return {
        type: 'FETCH_ISSUE'
    }
}

const fetchIssueSuccess = issues => {
    return {
        type: 'FETCH_ISSUE_SUCCESS',
        payload: issues
    }
}

const fetchIssueFailure = error => {
    return {
        type: 'FETCH_ISSUE_FAILURE',
        payload: error
    }
}
export const highlightIssue = (issueID) => {
    return {
        type: 'HIGHLIGHT_ISSUE',
        payload: issueID
    }
}

export const toggleNoti = () => {
    return {
        type: 'TOGGLE_NOTIFICATION'
    }
}

export const closeNoti = () => {
    return {
        type: 'CLOSE_NOTIFICATION'
    }
}

export function fetchIssue(page) {
    return dispatch => {
      dispatch(fetchIssueRequest());
      return fetch(`https://api.github.com/repos/rails/rails/issues?page=${page}&per_page=5`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            let data = json.map(item => {
                return Object.assign({},
                    item, {highlighted: false}
                )
            })
            dispatch(fetchIssueSuccess(data));
          return json;
        })
        .catch(error => dispatch(fetchIssueFailure(error)));
    };
  }