import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, jest } from '@jest/globals';

import Modal, { ModalProps } from '../Modal';

const onCloseMock = jest.fn();

const renderModal = (props: Partial<ModalProps> = {}) => {
    const defaultProps: ModalProps = {
        isOpen: true,
        onClose: onCloseMock,
        children: <div>Modal Content</div>,
    };
    return render(<Modal {...defaultProps} {...props} />);
};

test('renders modal when isOpen is true', () => {
    renderModal();
    const modalContent = screen.getByText('Modal Content');
    expect(modalContent).toBeTruthy();
});

test('does not render modal when isOpen is false', () => {
    renderModal({ isOpen: false });
    const modalContent = screen.queryByText('Modal Content');
    expect(modalContent).not.toBeTruthy();
});