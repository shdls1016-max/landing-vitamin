const offer = document.querySelector('#offer');

document.querySelectorAll('[data-scroll-offer]').forEach((button) => {
  button.addEventListener('click', () => offer?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
});

const planButtons = document.querySelectorAll('[data-plan]');
const selectedPlan = document.querySelector('#selected-plan');

planButtons.forEach((button) => {
  button.addEventListener('click', () => {
    planButtons.forEach((item) => {
      item.classList.remove('selected');
      item.setAttribute('aria-checked', 'false');
    });
    button.classList.add('selected');
    button.setAttribute('aria-checked', 'true');
    if (selectedPlan) selectedPlan.textContent = button.dataset.plan;
  });
});

document.querySelector('#purchase-button')?.addEventListener('click', () => {
  alert('선택하신 구성으로 구매 단계로 이동합니다.');
});
