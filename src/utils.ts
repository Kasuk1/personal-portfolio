/**
 * @deprecated since version 2.0 - Using R3F
 * Please avoid use due to sections(routes) and skills container
 * was removed from webapp
 */
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
