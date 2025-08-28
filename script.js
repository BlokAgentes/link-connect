// Mock data
const students = [
    {
        id: 1,
        name: "Ana Silva",
        semester: 3,
        interests: ["Educação", "Tecnologia"],
        company: "Innovators",
        initials: "AS",
        photo: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "Carlos Santos",
        semester: 5,
        interests: ["Agronegócio", "Sustentabilidade"],
        company: "Winners",
        initials: "CS",
        photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Marina Costa",
        semester: 2,
        interests: ["Educação", "Saúde"],
        company: "Dreamer",
        initials: "MC",
        photo: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        id: 4,
        name: "Roberto Lima",
        semester: 4,
        interests: ["Tecnologia", "Finanças"],
        company: "Builder",
        initials: "RL",
        photo: "https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
        id: 5,
        name: "Juliana Pereira",
        semester: 1,
        interests: ["Educação"],
        company: "Winners",
        initials: "JP",
        photo: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 6,
        name: "Pedro Oliveira",
        semester: 6,
        interests: ["Agronegócio", "Tecnologia"],
        company: "Creators",
        initials: "PO",
        photo: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
        id: 7,
        name: "Fernanda Rocha",
        semester: 3,
        interests: ["Saúde", "Sustentabilidade"],
        company: "Builder",
        initials: "FR",
        photo: "https://randomuser.me/api/portraits/women/72.jpg"
    },
    {
        id: 8,
        name: "Lucas Mendes",
        semester: 5,
        interests: ["Tecnologia"],
        company: "Dreamer",
        initials: "LM",
        photo: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        id: 9,
        name: "Camila Fernandes",
        semester: 2,
        interests: ["Finanças", "Educação"],
        company: "Creators",
        initials: "CF",
        photo: "https://randomuser.me/api/portraits/women/79.jpg"
    },
    {
        id: 10,
        name: "Diego Alves",
        semester: 4,
        interests: ["Sustentabilidade", "Agronegócio"],
        company: "Innovators",
        initials: "DA",
        photo: "https://randomuser.me/api/portraits/men/91.jpg"
    }
];

const posts = [
    {
        id: 1,
        author: "Carlos Santos",
        content: "Preciso de contato de fornecedor de fertilizantes orgânicos para um projeto no interior de SP. Alguém tem indicações?",
        tags: ["Agronegócio"],
        company: "Winners",
        date: "2024-08-25",
        comments: [
            {
                id: 1,
                author: "Pedro Oliveira",
                company: "Creators",
                content: "Conheço uma cooperativa em Campinas que trabalha só com orgânicos. Posso te passar o contato!",
                date: "2024-08-25"
            }
        ]
    },
    {
        id: 2,
        author: "Ana Silva",
        content: "Estou desenvolvendo uma plataforma de ensino para crianças com dificuldades de aprendizagem. Busco alguém com experiência em psicopedagogia para trocar ideias.",
        tags: ["Educação"],
        company: "Innovators",
        date: "2024-08-24",
        comments: [
            {
                id: 1,
                author: "Juliana Pereira",
                company: "Winners",
                content: "Que projeto interessante! Tenho experiência com crianças com dislexia. Podemos conversar?",
                date: "2024-08-24"
            },
            {
                id: 2,
                author: "Marina Costa",
                company: "Dreamer",
                content: "Ana, trabalho na área de saúde e vejo muito essa demanda. Gostaria de ajudar!",
                date: "2024-08-24"
            }
        ]
    },
    {
        id: 3,
        author: "Roberto Lima",
        content: "Alguém já trabalhou com APIs de pagamento? Preciso integrar PIX no meu projeto e queria dicas de qual gateway usar.",
        tags: ["Tecnologia", "Finanças"],
        company: "Builder",
        date: "2024-08-23",
        comments: []
    },
    {
        id: 4,
        author: "Marina Costa",
        content: "Tenho uma ideia para um app de saúde mental voltado para estudantes. Alguém interessado em formar uma equipe?",
        tags: ["Saúde", "Tecnologia"],
        company: "Dreamer",
        date: "2024-08-22",
        comments: []
    },
    {
        id: 5,
        author: "Diego Alves",
        content: "Busco parceiros para desenvolver soluções de energia renovável para pequenos produtores rurais. Vamos conversar?",
        tags: ["Sustentabilidade", "Agronegócio"],
        company: "Innovators",
        date: "2024-08-21",
        comments: []
    }
];

const announcements = [
    {
        id: 1,
        title: "Hackathon Link 2024",
        content: "Inscrições abertas para o maior hackathon da Link! Participe e desenvolva soluções inovadoras para os desafios do Brasil. Premiação total de R$ 50.000. Inscrições até 30/08.",
        date: "2024-08-26"
    },
    {
        id: 2,
        title: "Workshop: Pitch para Investidores",
        content: "Aprenda a apresentar seu projeto de forma convincente! Workshop gratuito com especialistas em captação de recursos. Vagas limitadas.",
        date: "2024-08-25"
    },
    {
        id: 3,
        title: "Networking Night - Setembro",
        content: "Venha conhecer alumni da Link que são empreendedores de sucesso. Uma noite para fazer conexões valiosas e trocar experiências.",
        date: "2024-08-20"
    },
    {
        id: 4,
        title: "Programa de Mentoria 2024.2",
        content: "Inscrições abertas para o programa de mentoria! Seja mentorado por profissionais experientes do mercado. Acelere seu crescimento profissional.",
        date: "2024-08-18"
    }
];

// DOM Elements
let studentsGrid, semestreFilter, interesseFilter, postsContainer, newPostForm, announcementsContainer;

// Initialize page based on current URL
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        initProfiles();
    } else if (currentPage === 'mural.html') {
        initMural();
        initExpandablePostForm(); // Ensure this is called
    } else if (currentPage === 'avisos.html') {
        initAnnouncements();
    }
});

// Profiles page initialization
function initProfiles() {
    studentsGrid = document.getElementById('students-grid');
    semestreFilter = document.getElementById('semestre-filter');
    interesseFilter = document.getElementById('interesse-filter');
    
    if (!studentsGrid) return;
    
    renderStudents(students);
    
    // Event listeners for filters
    if (semestreFilter) {
        semestreFilter.addEventListener('change', filterStudents);
    }
    if (interesseFilter) {
        interesseFilter.addEventListener('change', filterStudents);
    }
}

function renderStudents(studentsToRender) {
    if (!studentsGrid) return;
    
    studentsGrid.innerHTML = '';
    
    studentsToRender.forEach((student, index) => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card';
        studentCard.style.cursor = 'pointer';
        studentCard.style.animationDelay = `${index * 0.1}s`;
        studentCard.classList.add('scale-in');
        studentCard.innerHTML = `
            <div class="student-photo">
                <img src="${student.photo}" alt="${student.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="student-initials" style="display:none;">${student.initials}</div>
            </div>
            <div class="student-name">${student.name}</div>
            <div class="student-semester">${student.semester}º Semestre</div>
            <div class="student-interests">
                ${student.interests.map(interest => 
                    `<span class="interest-tag">${interest}</span>`
                ).join('')}
            </div>
            <div class="student-company">${student.company}</div>
        `;
        
        // Add click event to open modal
        studentCard.addEventListener('click', () => openStudentModal(student));
        
        studentsGrid.appendChild(studentCard);
    });
}

function filterStudents() {
    if (!semestreFilter || !interesseFilter) return;
    
    const selectedSemester = semestreFilter.value;
    const selectedInterest = interesseFilter.value;
    
    let filteredStudents = students;
    
    if (selectedSemester) {
        filteredStudents = filteredStudents.filter(student => 
            student.semester.toString() === selectedSemester
        );
    }
    
    if (selectedInterest) {
        filteredStudents = filteredStudents.filter(student => 
            student.interests.includes(selectedInterest)
        );
    }
    
    renderStudents(filteredStudents);
}

// Mural page initialization
function initMural() {
    postsContainer = document.getElementById('posts-container');
    newPostForm = document.getElementById('new-post-form');
    
    if (!postsContainer) return;
    
    renderPosts();
    
    // Initialize expandable form functionality
    initExpandablePostForm();
    
    if (newPostForm) {
        newPostForm.addEventListener('submit', handleNewPost);
    }
}

function renderPosts() {
    if (!postsContainer) return;
    
    postsContainer.innerHTML = '';
    
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <div class="post-header">
                <div class="post-author">${post.author}</div>
                <div class="post-date">${formatDate(post.date)}</div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-footer">
                <div class="post-tags">
                    ${post.tags.map(tag => 
                        `<span class="post-tag">${tag}</span>`
                    ).join('')}
                </div>
                <div class="post-company">
                    <span class="company-tag">Turma ${post.company}</span>
                </div>
            </div>
            <div class="post-comments">
                <div class="comments-header">
                    <span class="comments-count">${post.comments.length} comentário${post.comments.length !== 1 ? 's' : ''}</span>
                    <button class="toggle-comments-btn" onclick="toggleComments(${post.id})">
                        ${post.comments.length > 0 ? 'Ver comentários' : 'Comentar'}
                    </button>
                </div>
                <div class="comments-section" id="comments-${post.id}">
                    <div class="comments-list" id="comments-list-${post.id}">
                        ${post.comments.map(comment => `
                            <div class="comment">
                                <div class="comment-header">
                                    <span class="comment-author">${comment.author}</span>
                                    <span class="comment-company">Turma ${comment.company}</span>
                                    <span class="comment-date">${formatDate(comment.date)}</span>
                                </div>
                                <div class="comment-content">${comment.content}</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="add-comment">
                        <form class="comment-form" onsubmit="addComment(event, ${post.id})">
                            <div class="comment-input-row">
                                <textarea name="content" placeholder="Escreva seu comentário..." required></textarea>
                                <button type="submit" class="btn-comment">Comentar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
        postsContainer.appendChild(postCard);
    });
}

function toggleComments(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    const toggleBtn = event.target;
    const post = posts.find(p => p.id === postId);
    
    if (commentsSection.classList.contains('open')) {
        commentsSection.classList.remove('open');
        toggleBtn.textContent = post.comments.length > 0 ? 'Ver comentários' : 'Comentar';
    } else {
        commentsSection.classList.add('open');
        toggleBtn.textContent = 'Ocultar comentários';
    }
}

function addComment(event, postId) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const post = posts.find(p => p.id === postId);
    
    const newComment = {
        id: post.comments.length + 1,
        author: "Usuário Anônimo",
        company: "Link",
        content: formData.get('content'),
        date: new Date().toISOString().split('T')[0]
    };
    
    post.comments.push(newComment);
    
    // Re-render just this post's comments
    const commentsList = document.getElementById(`comments-list-${postId}`);
    commentsList.innerHTML = post.comments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-company">Turma ${comment.company}</span>
                <span class="comment-date">${formatDate(comment.date)}</span>
            </div>
            <div class="comment-content">${comment.content}</div>
        </div>
    `).join('');
    
    // Update comments count
    const commentsCount = document.querySelector(`#comments-${postId}`).closest('.post-comments').querySelector('.comments-count');
    commentsCount.textContent = `${post.comments.length} comentário${post.comments.length !== 1 ? 's' : ''}`;
    
    // Clear form
    event.target.reset();
}

function handleNewPost(e) {
    e.preventDefault();
    
    const formData = new FormData(newPostForm);
    const newPost = {
        id: posts.length + 1,
        author: formData.get('author'),
        content: formData.get('content'),
        tags: formData.get('tags') ? [formData.get('tags')] : [],
        company: formData.get('company'),
        date: new Date().toISOString().split('T')[0],
        comments: []
    };
    
    posts.unshift(newPost);
    renderPosts();
    newPostForm.reset();
    
    // Show success message
    showMessage('Post publicado com sucesso!');
    
    // Collapse form after submission
    const addPostSection = document.getElementById('add-post-section');
    const buttonContainer = document.querySelector('.add-post-button-container');
    if (addPostSection && buttonContainer) {
        addPostSection.classList.remove('show');
        setTimeout(() => {
            addPostSection.style.display = 'none';
            buttonContainer.style.display = 'flex';
        }, 300);
    }
}

// Announcements page initialization
function initAnnouncements() {
    announcementsContainer = document.getElementById('announcements-container');
    
    if (!announcementsContainer) return;
    
    renderAnnouncements();
}

function renderAnnouncements() {
    if (!announcementsContainer) return;
    
    announcementsContainer.innerHTML = '';
    
    announcements.forEach(announcement => {
        const announcementCard = document.createElement('div');
        announcementCard.className = 'announcement-card';
        announcementCard.innerHTML = `
            <div class="announcement-title">${announcement.title}</div>
            <div class="announcement-date">${formatDate(announcement.date)}</div>
            <div class="announcement-content">${announcement.content}</div>
        `;
        announcementsContainer.appendChild(announcementCard);
    });
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

function showMessage(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Modal functionality
function openStudentModal(student) {
    const modalOverlay = document.getElementById('student-modal-overlay');
    const modal = document.getElementById('student-modal');
    const modalPhoto = document.getElementById('modal-student-photo');
    const modalName = document.getElementById('modal-student-name');
    const modalSemester = document.getElementById('modal-student-semester');
    const modalTurma = document.getElementById('modal-student-turma');
    const modalInterests = document.getElementById('modal-student-interests');
    const contactBtn = document.getElementById('contact-btn');
    const contactBanner = document.getElementById('contact-banner');
    
    // Hide contact banner initially
    if (contactBanner) {
        contactBanner.classList.remove('show');
    }
    
    // Populate modal with student data
    modalPhoto.innerHTML = `
        <img src="${student.photo}" alt="${student.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="student-initials" style="display:none;">${student.initials}</div>
    `;
    modalName.textContent = student.name;
    modalSemester.textContent = `${student.semester}º Semestre`;
    modalTurma.textContent = `Turma ${student.company}`;
    
    // Clear and populate interests
    modalInterests.innerHTML = '';
    student.interests.forEach(interest => {
        const tag = document.createElement('span');
        tag.className = 'modal-interest-tag';
        tag.textContent = interest;
        modalInterests.appendChild(tag);
    });
    
    // Show modal with animation
    modalOverlay.classList.add('active');
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Update contact button click handler
    contactBtn.onclick = () => handleContactStudent(student);
}

function closeStudentModal() {
    const modalOverlay = document.getElementById('student-modal-overlay');
    const modal = document.getElementById('student-modal');
    const contactBanner = document.getElementById('contact-banner');
    
    // Hide contact banner
    if (contactBanner) {
        contactBanner.classList.remove('show');
    }
    
    modal.classList.remove('active');
    setTimeout(() => {
        modalOverlay.classList.remove('active');
    }, 300);
}

function generateStudentEmail(studentName) {
    // Convert name to email format: nome.sobrenome@aluno.lsb.com.br
    const nameParts = studentName.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .split(' ');
    
    if (nameParts.length >= 2) {
        const firstName = nameParts[0];
        const lastName = nameParts[nameParts.length - 1];
        return `${firstName}.${lastName}@aluno.lsb.com.br`;
    } else {
        return `${nameParts[0]}@aluno.lsb.com.br`;
    }
}

function handleContactStudent(student) {
    const contactBanner = document.getElementById('contact-banner');
    const contactEmail = document.getElementById('contact-email');
    const copyEmailBtn = document.getElementById('copy-email-btn');
    
    if (!contactBanner || !contactEmail || !copyEmailBtn) return;
    
    // Generate and set the email
    const email = generateStudentEmail(student.name);
    contactEmail.textContent = email;
    
    // Show the contact banner
    contactBanner.classList.add('show');
    
    // Update copy button click handler
    copyEmailBtn.onclick = () => copyEmailToClipboard(email);
    
    showMessage(`Email de contato de ${student.name} exibido`);
}

function copyEmailToClipboard(email) {
    // Try to use the modern Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            showMessage('Email copiado para a área de transferência!');
            // Update button text temporarily
            const copyBtn = document.getElementById('copy-email-btn');
            const originalContent = copyBtn.innerHTML;
            copyBtn.innerHTML = 'Copiado!';
            setTimeout(() => {
                copyBtn.innerHTML = originalContent;
            }, 2000);
        }).catch(() => {
            fallbackCopyTextToClipboard(email);
        });
    } else {
        fallbackCopyTextToClipboard(email);
    }
}

function fallbackCopyTextToClipboard(text) {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showMessage('Email copiado para a área de transferência!');
        // Update button text temporarily
        const copyBtn = document.getElementById('copy-email-btn');
        const originalContent = copyBtn.innerHTML;
        copyBtn.innerHTML = 'Copiado!';
        setTimeout(() => {
            copyBtn.innerHTML = originalContent;
        }, 2000);
    } catch (err) {
        showMessage('Erro ao copiar email. Tente novamente.');
    }
    
    document.body.removeChild(textArea);
}

// Initialize modal event listeners
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn1 = document.getElementById('modal-close-btn');
    const closeBtn2 = document.getElementById('modal-close-btn2');
    const modalOverlay = document.getElementById('student-modal-overlay');
    
    // Close modal events
    if (closeBtn1) closeBtn1.addEventListener('click', closeStudentModal);
    if (closeBtn2) closeBtn2.addEventListener('click', closeStudentModal);
    
    // Close modal when clicking overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeStudentModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeStudentModal();
        }
    });
});

// Expandable Post Form functionality
function initExpandablePostForm() {
    console.log('Initializing expandable post form...');
    
    const expandBtn = document.getElementById('expand-post-btn');
    const collapseBtn = document.getElementById('collapse-post-btn');
    const cancelBtn = document.getElementById('cancel-post-btn');
    const addPostSection = document.getElementById('add-post-section');
    const buttonContainer = document.querySelector('.add-post-button-container');
    
    console.log('Elements found:', {
        expandBtn: !!expandBtn,
        collapseBtn: !!collapseBtn,
        cancelBtn: !!cancelBtn,
        addPostSection: !!addPostSection,
        buttonContainer: !!buttonContainer
    });
    
    if (!expandBtn || !addPostSection || !buttonContainer) {
        console.error('Required elements not found for expandable form');
        return;
    }
    
    // Expand form
    expandBtn.addEventListener('click', (e) => {
        console.log('Expand button clicked');
        e.preventDefault();
        buttonContainer.style.display = 'none';
        addPostSection.style.display = 'block';
        setTimeout(() => {
            addPostSection.classList.add('show');
        }, 10);
        
        // Focus on first input
        const firstInput = addPostSection.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 300);
        }
    });
    
    // Collapse form function
    const collapseForm = () => {
        console.log('Collapsing form');
        addPostSection.classList.remove('show');
        setTimeout(() => {
            addPostSection.style.display = 'none';
            buttonContainer.style.display = 'flex';
        }, 300);
        
        // Clear form
        const form = document.getElementById('new-post-form');
        if (form) form.reset();
    };
    
    // Collapse events
    if (collapseBtn) collapseBtn.addEventListener('click', collapseForm);
    if (cancelBtn) cancelBtn.addEventListener('click', collapseForm);
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && addPostSection.classList.contains('show')) {
            collapseForm();
        }
    });
    
    console.log('Expandable post form initialized successfully');
}