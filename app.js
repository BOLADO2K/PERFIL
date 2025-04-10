// Script para animação suave ao rolar para as seções
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona efeito de fade-in aos projetos quando ficam visíveis na tela
    const projects = document.querySelectorAll('.project');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    
    projects.forEach(project => {
        project.style.opacity = 0;
        project.style.transform = 'translateY(50px)';
        project.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(project);
    });
});