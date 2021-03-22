
const modalMdp = () => {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
       const box = document.querySelector('.modal');
       M.modal.init(box,{
           opacity:0.6,
       });

      });
    

        }
export default modalMdp;