"use client";
import Modal from "@/components/organisms/modal/modal";
import React, { Dispatch, FC } from "react";
import ProjectDetails, {
  ProjectDetailsProps,
} from "../project-details/project-details";
import Button from "@/components/molecules/button/button";
import PortfolioPage from "@/components/wrappers/portfolio-page/portfolio-page";
import "./project-details-modal.scss";
import { useRouter } from "next/navigation";

interface ProjectDetailsModalProps extends ProjectDetailsProps {
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

const ProjectDetailsModal: FC<ProjectDetailsModalProps> = (props) => {
  const { setIsModalOpen } = props;
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
                  `https://mon-eportfolio.vercel.app/project-details/${props.title}`
                );
                alert("Lien de la page copié avec succès !");
              }}
              theme="primary"
              shape="circle"
            />
          </div>
        </div>
      </Modal>
    </PortfolioPage>
  );
};

export default ProjectDetailsModal;
