export const findAndUpdateDividerSkillSelector = (
  event: React.MouseEvent<HTMLElement, MouseEvent>
) => {
  const dividers = document.querySelectorAll('.skill-divider');

  dividers.forEach((divider) => {
    if (divider === event.target) {
      divider.classList.toggle('opened');
    } else {
      divider.classList.toggle('closed');
    }
  });
};
