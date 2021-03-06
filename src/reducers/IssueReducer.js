const initialIssueState = {
    loading: false,
    issues: [],
    error: '' ,
    counter: 0,
    page: 1,
    recentHighlightIssues: [],
    notification: false
}

const IssueReducer = (state=initialIssueState, action) => {
    switch(action.type) {
        case 'FETCH_ISSUE_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_ISSUE_SUCCESS':
            return {
                ...state,
                loading: false,
                issues: action.payload,
                error: '',
                page: state.page + 1
            }
        case 'FETCH_ISSUE_FAILURE':
            return {
                loading: false,
                issues: [],
                error: action.payload
            }
        
        case 'HIGHLIGHT_ISSUE':
            let counter = 0;
            let issueHighlight=null;
            return {
                ...state,
                issues: state.issues.map(issue => {
                    if (issue.id == action.payload & issue.highlighted != true) {
                        issue['highlighted'] = true
                        issueHighlight = issue;
                        counter = 1;
                        return Object.assign({},
                            issue, {highlighted: true}
                        )
                    }
                    return Object.assign({}, issue, {highlighted: false})
                }),
                counter: state.counter<5?state.counter + counter:state.counter,
                // Anoying coupling with condition.
                recentHighlightIssues: issueHighlight!=null?[issueHighlight].concat(state.recentHighlightIssues.slice(0,4)) : state.recentHighlightIssues
            }
        case 'TOGGLE_NOTIFICATION':
            return {
                ...state,
                notification: !state.notification
            }

        case 'CLOSE_NOTIFICATION':
            return {
                ...state,
                notification: false
            }
        default:
            return state
    }
}


export default IssueReducer