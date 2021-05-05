const initialIssueState = {
    loading: false,
    issues: [],
    error: '' ,
    counter: 0,
    page: 1
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
            var counter = state.counter+1
            return {
                ...state,
                issues: state.issues.map(issue => {
                    if (issue.id == action.payload) {
                        issue['highlighted'] = true
                        return Object.assign({},
                            issue, {highlighted: true}
                        )
                    }
                    return Object.assign({}, issue, {highlighted: false})
                }),
                counter: counter
            }
        default:
            return state
    }
}


export default IssueReducer