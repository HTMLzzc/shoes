function showSection(section) {
    const maleSection = document.getElementById('male');
    const femaleSection = document.getElementById('female');

    if (section === 'male') {
        maleSection.classList.remove('hidden');
        femaleSection.classList.add('hidden');
    } else {
        femaleSection.classList.remove('hidden');
        maleSection.classList.add('hidden');
    }
}

// عرض القسم الأول عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    showSection('male'); // بدءًا من عرض قسم الكوتشي الرجالي
});
