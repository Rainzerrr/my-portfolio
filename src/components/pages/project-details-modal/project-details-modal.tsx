"use client";
import Modal from "@/components/organisms/modal/modal";
import React, { Dispatch, FC } from "react";
import ProjectDetails, {
  ProjectDetailsProps,
} from "../project-details/project-details";
import Button from "@/components/molecules/button/button";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import { useRouter } from "@/i18n/routing";
import useSnackbar from "@/hooks/useSnackbar";
import Snackbar from "@/components/molecules/snackbar/snackbar";
import "./project-details-modal.scss";

interface ProjectDetailsModalProps extends ProjectDetailsProps {
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

const ProjectDetailsModal: FC<ProjectDetailsModalProps> = (props) => {
  const { setIsModalOpen } = props;
  const { isSnackbarOpen, snackBarText, showSnackbar } = useSnackbar();
  const { push } = useRouter();

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Texte copié dans le presse-papier avec succès!");
      })
      .catch((err) => {
        console.error("Erreur lors de la copie dans le presse-papier : ", err);
      });
  };
  return (
    <>
      <PortfolioPage>
        <Modal setIsOpen={setIsModalOpen}>
          <div className="project-details-modal">
            <ProjectDetails {...props} isModal />

            <div className="project-details-modal__buttons">
              <Button
                size="L"
                leftIcon="cross"
                onClick={() => {
                  setIsModalOpen(false);
                }}
                theme="primary"
                shape="circle"
              />
              <Button
                size="L"
                leftIcon="fullscreen"
                theme="primary"
                shape="circle"
                onClick={() => {
                  setIsModalOpen(false);
                  window.scrollTo(0, 0);
                  push(`/project-details/${props.title}`);
                }}
              />

              <Button
                size="L"
                leftIcon="link"
                onClick={() => {
                  copyToClipboard(
                    `https://rayan-ainouche.dev/project-details/${props.title}`
                  );
                  showSnackbar("Lien de la page copié avec succès !");
                }}
                theme="primary"
                shape="circle"
              />
            </div>
          </div>
        </Modal>
      </PortfolioPage>
      <Snackbar isSnackbarOpen={isSnackbarOpen} text={snackBarText} />
    </>
  );
};

export default ProjectDetailsModal;
