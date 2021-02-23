const data = [
    {
        name: "Villayat Ali",
        Branch: "Mathematics & Computing",
        Address: "Kargil-Ladakh",
        language: "C,C++,HTML,CSS,JavaScript,PHP,SQL",
        framework: "BootStrap",
        image: 'wille1.jpg',
        contact: '+91XXXXXXXX'
    },
    {
        name: 'Rohan Das',
        Branch: "CSE",
        Address: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg',
        contact: '+91XXXXXXX'
    },
    {
        name: 'Camella Cabello',
        Branch: "ECE",
        Address: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg',
        contact: "+91XXXXXX"
    },
    {
        name: 'Aishwariya Rai',
        Branch: "CSE",
        Address: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg',
        contact: "+91XXXXXX"
    },
    {
        name: 'Rohit Sharma',
        Branch: "ECE",
        Address: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg',
        contact: "+91XXXXXX"
    }
]

// profiles iterator

function pIterator(profile) {

    let nextIndex = 0;

    return {
        next: function () {
            if (nextIndex < profile.length) {
                return {
                    value: profile[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
// Event listner for next button
let btn = document.getElementById("nextBtn");

btn.addEventListener("click", nextProfile);

const firstStu = pIterator(data);

nextProfile();


function nextProfile() {
    const currentStudent = firstStu.next().value;
    if (currentStudent != undefined) {

        let image = document.getElementById("image");
        let profile = document.getElementById("profile");
        image.innerHTML = `<img src="${currentStudent.image}">`;
        profile.innerHTML = `  <ul class="list-group">
    <li class="list-group-item"><b>Name</b> : <i>${currentStudent.name}</i></li>
    <li class="list-group-item"><b>Branch</b> : <i>${currentStudent.Branch}</i></li>
    <li class="list-group-item"><b>Address</b> : <i>${currentStudent.Address}</i></li>
    <li class="list-group-item"><b>Language</b> : <i>${currentStudent.language}</i></li>
    <li class="list-group-item"><b>Framework</b> : <i>${currentStudent.framework}</i></li>
    <li class="list-group-item"><b>Contact</b> : <i>${currentStudent.contact}</i></li>
</ul>`;
    }
    else{
        window.alert("End of Student Profiles");
        window.location.reload();
    }
}