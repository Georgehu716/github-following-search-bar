console.log("Hi, GitHub following search bar.")

const userProfileFrame = document.getElementById("user-profile-frame")
const searchDiv= document.createElement("div")
searchDiv.id = "new-search-div"
// searchDiv.textContent = `Hello, I am a new created p`

function getSearchForm() {
    return `
    <form id="new-search-form" data-pjax="true" data-turbo="true" data-turbo-frame="user-starred-repos" data-turbo-action="advance" class="subnav-search ml-0 mb-1 mb-lg-0 mr-lg-3 flex-auto width-full" action="" accept-charset="UTF-8" method="get">
        <input id="new-search-input" type="search" name="q" value="" class="form-control width-full subnav-search-input" placeholder="Search following" aria-label="Search following" autocapitalize="off" autocomplete="off">
        <button type="submit" data-view-component="true" class="sr-only btn>Search</button>
    </form>
    `
}

searchDiv.innerHTML = getSearchForm()
userProfileFrame.insertAdjacentElement("beforebegin", searchDiv)

const newSearchForm = document.getElementById("new-search-form")
newSearchForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const newSearchInput = document.getElementById("new-search-input")
    console.log("new search input: ", newSearchInput.value)
})
