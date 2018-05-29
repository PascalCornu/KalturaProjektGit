export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const pageSize = 25;
export let pageIndex = 1;


let config = new window.KalturaConfiguration(233);
config.serviceUrl = "http://api.video.swisstxt.ch/";
let client = null;
let dispatcher;
let page = 1;

export function fetchVideos(searchTerms = '', currentPage = 1) {
    page = currentPage;
    return dispatch => {
        if (client == null) {
            session_start(dispatch);
        } else {
            getVideoList(searchTerms, dispatch);
        }    
    };
}


function session_start_cb(success, ks){
    if(!success)
        alert(ks.message);

    client.setKs(ks);
    
    console.log("Session started: " + ks);
    console.log(client);
    
    fetchVideos()(dispatcher);
}

function session_start(dispatch){
    dispatcher = dispatch;
    client = new window.KalturaClient(config);
    
    let secret = "a110cd15657a1b8fc6536295e5263e10";
    let userId, expiry, privileges = null;
    let type = 2; // KalturaSessionType.USER = 0; KalturaSessionType.ADMIN = 2
    let partnerId = 233;
    window.KalturaSessionService.start(secret, userId, type, partnerId, expiry, privileges)
        .completion(session_start_cb)
        .execute(client);
}

function getVideoList(searchTerm, dispatch){
    let filter = new window.KalturaMediaEntryFilter();
    filter.searchTextMatchOr = searchTerm;
    let pager = new window.KalturaFilterPager();
    pager.pageSize = pageSize;
    let pageIndex = page;
    // if (window.location.href.includes("page")) {
    //     pageIndex = window.location.href.split("page/")[1].split("/")[0];
    // } else {
    //     pageIndex = window.location.href.split("page/")[1];
    // }
    
    pager.pageIndex = pageIndex;
    window.KalturaMediaService.listAction(filter, pager)
        .completion((success, entry) => {
            dispatch && dispatch({
                type: FETCH_VIDEOS,
                payload: entry
            })   
    }).execute(client);
}

